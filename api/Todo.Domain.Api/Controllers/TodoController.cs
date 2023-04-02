using Microsoft.AspNetCore.Mvc;
using Todo.Domain.Commands;
using Todo.Domain.Entities;
using Todo.Domain.Handlers;
using Todo.Domain.Repositories;

namespace Todo.Domain.Api.Controllers
{
    [ApiController]
    [Route("v1/todos")]
    public class TodoController : ControllerBase
    {
        [Route("")]
        [HttpGet]
        public IEnumerable<TodoItem> GetAll(
            [FromServices]ITodoRepository repository)
        {
            return repository.GetAll("pedrogois");
        }

        [Route("done")]
        [HttpGet]
        public IEnumerable<TodoItem> GetAllDone(
            [FromServices]ITodoRepository repository)
        {
            return repository.GetAllDone("pedrogois");
        }

        [Route("undone")]
        [HttpGet]
        public IEnumerable<TodoItem> GetAllUndone(
        [FromServices] ITodoRepository repository)
        {
            return repository.GetAllUndone("pedrogois");
        }

        [Route("done/today")]
        [HttpGet]
        public IEnumerable<TodoItem> GetDoneForToday(
        [FromServices] ITodoRepository repository)
        {
            return repository.GetByPeriods(
                "pedrogois",
                DateTime.Now.Date,
                true);
        }

        [Route("undone/today")]
        [HttpGet]
        public IEnumerable<TodoItem> GetInactiveeForToday(
        [FromServices] ITodoRepository repository)
        {
            return repository.GetByPeriods(
                "pedrogois",
                DateTime.Now.Date,
                false);
        }

        [Route("done/tomorrow")]
        [HttpGet]
        public IEnumerable<TodoItem> GetDoneForTomorrow(
        [FromServices] ITodoRepository repository)
        {
            return repository.GetByPeriods(
                "pedrogois",
                DateTime.Now.Date.AddDays(1),
                true);
        }

        [Route("undone/tomorrow")]
        [HttpGet]
        public IEnumerable<TodoItem> GetUnoneForTomorrow(
        [FromServices] ITodoRepository repository)
        {
            return repository.GetByPeriods(
                "pedrogois",
                DateTime.Now.Date.AddDays(1),
                false);
        }

        [Route("create")]
        [HttpPost]
        public GenericCommandResult Create(
            [FromBody]CreateTodoCommand command,
            [FromServices]TodoHandler handler)
        {
            command.User = "pedrogois";
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("Update")]
        [HttpPut]
        public GenericCommandResult Update(
            [FromBody] UpdateTodoCommand command,
            [FromServices] TodoHandler handler)
        {
            command.User = "pedrogois";
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("MarkAsDone")]
        [HttpPut]
        public GenericCommandResult MarkAsDone(
            [FromBody] MarkTodoAsDoneCommand command,
            [FromServices] TodoHandler handler)
        {
            command.User = "pedrogois";
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("MarkAsUndone")]
        [HttpPut]
        public GenericCommandResult MarkAsUndone(
            [FromBody] MarkTodoAsUndoneCommand command,
            [FromServices] TodoHandler handler)
        {
            command.User = "pedrogois";
            return (GenericCommandResult)handler.Handle(command);
        }
    }
}
