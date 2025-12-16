using System.ComponentModel.DataAnnotations;

namespace cs_react_todo.Models
{
    public class Todo
    {
        [Key] // "Id"の命名から推測して主キーとして扱われるが、念のため明示的に指定
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Title { get; set; }

        // bool, date系は[Required]しなくてもnull未許容になる
        public bool IsCompleted { get; set; }
        public DateTime Deadline { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
