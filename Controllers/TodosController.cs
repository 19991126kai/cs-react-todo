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
        todo.CreatedAt = GetJstNow();
        todo.UpdatedAt = GetJstNow();

        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);
    }

    // PUT: api/todos/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTodo(int id, Todo updatedTodo)
    {
        if (id != updatedTodo.Id)
        {
            return BadRequest(); // 400 Bad Request
        }

        var existingTodo = await _context.Todos.FindAsync(id);
        if (existingTodo == null)
        {
            return NotFound(); // 404 Not Found
        }

        // 更新項目のみ反映（CreatedAt は変更しない）
        existingTodo.Title = updatedTodo.Title;
        existingTodo.Deadline = updatedTodo.Deadline;
        existingTodo.IsCompleted = updatedTodo.IsCompleted;
        existingTodo.UpdatedAt = GetJstNow();

        await _context.SaveChangesAsync();

        return NoContent(); // 204 No Content
    }

    // DELETE: api/todos/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodo(int id)
    {
        var todo = await _context.Todos.FindAsync(id);
        if (todo == null)
        {
            return NotFound();
        }

        _context.Todos.Remove(todo);
        await _context.SaveChangesAsync();

        return NoContent(); // 204 No Content
    }

    // 現在時刻（JST）を取得する関数
    private DateTime GetJstNow()
    {
        var jst = TimeZoneInfo.FindSystemTimeZoneById("Tokyo Standard Time");
        var jstNow = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, jst);
        return jstNow;
    }
}
