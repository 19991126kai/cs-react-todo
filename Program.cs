using cs_react_todo.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// 環境に応じて DB を切り替え
if (builder.Environment.IsDevelopment())
{
    // 開発環境：SQLite
    builder.Services.AddDbContext<TodoContext>(options =>
        options.UseSqlite(builder.Configuration.GetConnectionString("TodoDatabase")));
}
else
{
    // 本番環境：PostgreSQL
    builder.Services.AddDbContext<TodoContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("TodoDatabase")));
}

builder.Services.AddControllers();

var app = builder.Build();

var scope = app.Services.CreateScope();
{
    var db = scope.ServiceProvider.GetRequiredService<TodoContext>();
    db.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapControllers();
app.MapFallbackToFile("index.html");
app.Run();
