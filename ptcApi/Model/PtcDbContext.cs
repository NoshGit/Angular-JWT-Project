using Microsoft.EntityFrameworkCore;

namespace PtcApi.Model
{
  public class PtcDbContext : DbContext
  {
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<AppUser> Users { get; set; }
    public DbSet<AppUserClaim> Claims { get; set; }

    private const string CONN =
                  @"Server=localhost\SQLEXPRESS;
                    Database=master;
                    Trusted_Connection=True;
                    MultipleActiveResultSets=true";

    // private const string CONN =@"Server=localhost;
    // Database=PTC-Pluralsight;
    // AttachDbFilename=D:\Noshir\Playground\Angular\Uploaded-Assignments\JWT-Project\Angular-JWT-Project\SqlData\PTC-Pluralsight.mdf;
    // MultipleActiveResultSets=true";
// @"Server=(localdb)\MSSQLLocalDB;
    protected override void OnConfiguring(
                DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(CONN);
    }
  }
}
