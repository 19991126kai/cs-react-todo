using Microsoft.AspNetCore.Mvc;

namespace cs_react_todo.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    // GET: api/<TestController>
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("API OK!!"); // HTTPステータスコード200を返す
    }
}

