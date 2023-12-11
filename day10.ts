type StreetSuffixTester<T extends string, U> = T extends `${infer First} ${infer Last}`
    ? Last extends U
        ? true
        : StreetSuffixTester<Last, U>
    : false;
