type SantaListProtector<T> = {readonly [K in keyof T]: T[K] extends Record<string, unknown> | unknown[] ? SantaListProtector<T[K]> : T[K]};
