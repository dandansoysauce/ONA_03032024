namespace CTestAappBackend.Models;

public class Item {
  public int Id { get; set; }
  public required string Name { get; set; }
  public string? Description { get; set; }
  public int? Price { get; set; }
  public int? Quantity { get; set; }
}