// TASK - Q

function hasProperty(obj: Record<string, any>, key: string): boolean {
  return key in obj;
}
console.log(hasProperty({ name: "Nexia", model: "S2" }, "model"));
console.log(hasProperty({ name: "Nexia", model: "S2" }, "year"));
