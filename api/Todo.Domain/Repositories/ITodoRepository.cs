using Todo.Domain.Entities;

namespace Todo.Domain.Repositories
{
    public interface ITodoRepository
    {
        void Create(TodoItem todo);
        void Delete(TodoItem todo);
        void Update(TodoItem todo);
        TodoItem GetById(Guid id, string user);
        IEnumerable<TodoItem> GetAll(string user);
        IEnumerable<TodoItem> GetAllDone(string user);
        IEnumerable<TodoItem> GetAllUndone(string user);
        IEnumerable<TodoItem> GetByPeriods(string user, DateTime date, bool done);
    }   
}
