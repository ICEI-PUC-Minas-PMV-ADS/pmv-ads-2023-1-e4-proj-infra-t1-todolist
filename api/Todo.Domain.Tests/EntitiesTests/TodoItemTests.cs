using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Todo.Domain.Entities;

namespace Todo.Domain.Tests.EntitiesTests
{
    [TestClass]
    public class TodoItemTests
    {
        private readonly TodoItem _validTodo = new TodoItem("Titulo", "Pedro", DateTime.Now);

        [TestMethod]    
        public void Dado_um_novo_todo_o_mesmo_nao_deve_ser_concluido()
        {
            Assert.AreEqual(_validTodo.Done, false);
        }
    }
}
