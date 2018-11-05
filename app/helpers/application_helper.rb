module ApplicationHelper
  def active?(path)
    "active" if current_page?(path)
  end

  def message_date(message)
    message.created_at.to_date == Date.today ? message.created_at.to_s(:time) : message.created_at.strftime("%d/%m/%Y")
  end

  def user_messages
    current_user.master? ? 0  : current_user.messages.unread.size
  end

  def archived_count
    Message.archived.size
  end

  def users_count
    User.normal.size
  end

  def user_token
    current_user.master? ? ("#{Figaro.env.api_key}&permission=master") : (current_user.token.to_s)
  end

  def route_name()
    route = request.original_fullpath
    route_name = ''
    
    case route
    when '/archived'
      route_name = 'Arquivadas'
    when '/messages/sent'
      route_name = 'Enviadas'
    when '/messages/new'
      route_name = 'Nova Mensagem'
    when '/users'
      route_name = 'Usuários'
    end

    if route_has('/messages') and !route_has('/new') and !route_has('/sent')
      route_name = 'Mensagens'
    end

    route_name
  
  end

  def route_has(string)
    route = request.original_fullpath
    if route.index(string)
      return true
    end
    return false
  end
end
