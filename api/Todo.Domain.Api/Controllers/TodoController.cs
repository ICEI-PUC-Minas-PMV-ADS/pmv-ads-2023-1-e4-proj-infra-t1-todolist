using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Todo.Domain.Commands;
using Todo.Domain.Entities;
using Todo.Domain.Handlers;
using Todo.Domain.Repositories;

namespace Todo.Domain.Api.Controllers
{
    [ApiController]
    [Route("v1/todos")]
    [Authorize]
    public class TodoController : ControllerBase
    {
        [Route("")]
        [HttpGet]
        public IEnumerable<TodoItem> GetAll(
            [FromServices]ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetAll(user);
        }

        [Route("done")]
        [HttpGet]
        public IEnumerable<TodoItem> GetAllDone(
            [FromServices]ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetAllDone(user);
        }

        [Route("undone")]
        [HttpGet]
        public IEnumerable<TodoItem> GetAllUndone(
        [FromServices] ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetAllUndone(user);
        }

        [Route("done/today")]
        [HttpGet]
        public IEnumerable<TodoItem> GetDoneForToday(
        [FromServices] ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetByPeriods(
                user,
                DateTime.Now.Date,
                true);
        }

        [Route("undone/today")]
        [HttpGet]
        public IEnumerable<TodoItem> GetInactiveeForToday(
        [FromServices] ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetByPeriods(
                user,
                DateTime.Now.Date,
                false);
        }

        [Route("done/tomorrow")]
        [HttpGet]
        public IEnumerable<TodoItem> GetDoneForTomorrow(
        [FromServices] ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetByPeriods(
                user,
                DateTime.Now.Date.AddDays(1),
                true);
        }

        [Route("undone/tomorrow")]
        [HttpGet]
        public IEnumerable<TodoItem> GetUnoneForTomorrow(
        [FromServices] ITodoRepository repository)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            return repository.GetByPeriods(
                user,
                DateTime.Now.Date.AddDays(1),
                false);
        }

        [Route("create")]
        [HttpPost]
        public GenericCommandResult Create(
            [FromBody]CreateTodoCommand command,
            [FromServices]TodoHandler handler)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            command.User = user;
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("Update")]
        [HttpPut]
        public GenericCommandResult Update(
            [FromBody] UpdateTodoCommand command,
            [FromServices] TodoHandler handler)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            command.User = user;
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("MarkAsDone")]
        [HttpPut]
        public GenericCommandResult MarkAsDone(
            [FromBody] MarkTodoAsDoneCommand command,
            [FromServices] TodoHandler handler)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            command.User = user;
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("MarkAsUndone")]
        [HttpPut]
        public GenericCommandResult MarkAsUndone(
            [FromBody] MarkTodoAsUndoneCommand command,
            [FromServices] TodoHandler handler)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            command.User = user;
            return (GenericCommandResult)handler.Handle(command);
        }

        [Route("Delete")]
        [HttpDelete]
        public GenericCommandResult Delete(
            [FromBody] DeleteCommand command,
            [FromServices] TodoHandler handler)
        {
            var user = User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            command.User = user;
            return (GenericCommandResult)handler.Handle(command);
        }
    }
}
