import { useSyncExternalStore } from "react";

/**
 * Creates a small per-device preference stored in localStorage, readable with
 * a hook that stays in sync across components and browser tabs. Used for
 * settings that the MVP keeps without an account (ui_specification §5.4).
 *
 * @param storageKey - localStorage key.
 * @param allowedValues - Valid values; anything else read from storage is ignored.
 * @param defaultValue - Used on the server, on first visit, and when storage is unavailable.
 * @returns `usePreference()` hook returning `[value, setValue]`.
 */
export function createLocalPreference<T extends string>(storageKey: string, allowedValues: readonly T[], defaultValue: T) {
  const changeEvent = `spascle-preference:${storageKey}`;
  let fallbackValue: T | null = null;

  function readValue(): T {
    try {
      const storedValue = localStorage.getItem(storageKey);
      return allowedValues.find((allowedValue) => allowedValue === storedValue) ?? defaultValue;
    } catch {
      return defaultValue;
    }
  }

  function writeValue(nextValue: T) {
    try {
      localStorage.setItem(storageKey, nextValue);
    } catch {
      // Storage unavailable (private mode, blocked): the change still applies until reload.
      fallbackValue = nextValue;
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  function subscribe(onChange: () => void) {
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKey) onChange();
    };
    window.addEventListener(changeEvent, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(changeEvent, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }

  function usePreference(): [T, (nextValue: T) => void] {
    const value = useSyncExternalStore(
      subscribe,
      () => fallbackValue ?? readValue(),
      () => defaultValue,
    );
    return [value, writeValue];
  }

  return usePreference;
}
