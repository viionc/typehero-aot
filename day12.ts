type FindSanta<T extends unknown[]> = T extends [...infer First, infer Tail] ? Tail extends "🎅🏼" ? First["length"] : FindSanta<First>: never
