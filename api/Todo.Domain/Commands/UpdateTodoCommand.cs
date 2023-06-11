﻿using Flunt.Notifications;
using Flunt.Validations;
using Todo.Domain.Commands.Contracts;

namespace Todo.Domain.Commands
{
    public class UpdateTodoCommand : Notifiable, ICommand
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string User { get; set; }
        public DateTime Date { get; set; }

        public UpdateTodoCommand()
        {
        }

        public UpdateTodoCommand(Guid id, string title, string user, DateTime date)
        {
            Id = id;
            Title = title;
            User = user;
            Date = date; 
        }

        public void Validate()
        {
            AddNotifications(
                new Contract()
                .Requires()
                .HasMinLen(Title, 3, "Title", "Por favor, descreva melhor esta tarefa")
                .HasMinLen(User, 6, "User", "Usuário inválido")
                );
        }
    }
}
