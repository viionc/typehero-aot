type AppendGood<T> = {[K in keyof T]: K extends "naughty" ? never : T[K]};
