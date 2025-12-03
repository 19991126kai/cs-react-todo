using Microsoft.AspNetCore.Mvc;
using cs_react_todo.Models;
using Microsoft.EntityFrameworkCore;
using cs_react_todo.Data;

namespace cs_react_todo.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private readonly TodoContext _context;

    public TodosController(TodoContext context)
    {
        _context = context;
    }

    // GET: api/todos
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
    {
        var todos = await _context.Todos.ToListAsync();
        return Ok(todos);
    }

    // GET: api/todos/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Todo>> GetTodo(int id)
    {
        var todo = await _context.Todos.FindAsync(id);

        if (todo == null)
        {
            return NotFound();
        }

        return todo;
    }

    // POST: api/todos
    [HttpPost]
    public async Task<ActionResult<Todo>> PostTodo(Todo todo)
    {
        var jst = TimeZoneInfo.FindSystemTimeZoneById("Tokyo Standard Time");
        var jstNow = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, jst);

        todo.CreatedAt = jstNow;
        todo.UpdatedAt = jstNow;

        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);
    }
}
