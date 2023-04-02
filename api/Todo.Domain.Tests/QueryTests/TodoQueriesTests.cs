using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Todo.Domain.Entities;
using Todo.Domain.Queries;

namespace Todo.Domain.Tests.QueryTests
{
    [TestClass]
    public class TodoQueriesTests
    {
        private List<TodoItem> _items;

        public TodoQueriesTests()
        {
            _items = new List<TodoItem>();
            _items.Add(new TodoItem("Tarefa 1", "UsuarioA", DateTime.Now));
            _items.Add(new TodoItem("Tarefa 2", "UsuarioB", DateTime.Now));
            _items.Add(new TodoItem("Tarefa 3", "UsuarioC", DateTime.Now));
            _items.Add(new TodoItem("Tarefa 4", "UsuarioD", DateTime.Now));
            _items.Add(new TodoItem("Tarefa 5", "UsuarioC", DateTime.Now));

        }

        [TestMethod]
        public void Deve_retornar_tarefas_apenas_do_usuario_UseuarioC()
        {
            var result = _items.AsQueryable().Where(TodoQueries.GetAll("UsuarioC"));
            Assert.AreEqual(2, result.Count());
        }
    }
}
