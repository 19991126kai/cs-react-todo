using Microsoft.EntityFrameworkCore;
using cs_react_todo.Models;

namespace cs_react_todo.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }

        public DbSet<Todo> Todos { get; set; }   // TodoエンティティのDBセット
    }
}
