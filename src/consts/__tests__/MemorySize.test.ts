import { maxMemorySize, smallestMemoryMultiple } from "../MemorySize";

describe("MemorySize", () => {
  it("should have the correct maxMemorySize value", () => {
    expect(maxMemorySize).toEqual(8388608);
  });

  it("should have the correct smallestMemoryMultiple value", () => {
    expect(smallestMemoryMultiple).toEqual(1024);
  });
});
