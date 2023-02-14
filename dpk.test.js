const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  
  it("When event.partitionKey is null", () => {
    let event = {partitionKey: null}; 
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBeGreaterThan(0);
  });
  
  
  it("When event.partitionKey is 123", () => {
    let event = {partitionKey: 123}; 
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("123");
  });
  
});
