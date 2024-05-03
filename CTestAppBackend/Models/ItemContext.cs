using Microsoft.EntityFrameworkCore;

namespace CTestAappBackend.Models;

public class ItemContext : DbContext
{
    public ItemContext(DbContextOptions<ItemContext> options) : base(options) {}

    public DbSet<Item> Items { get; set; } = null!;
}