require "application_responder"
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :require_login, except: [:new, :create]
  layout :layout_by_resource
  self.responder = ApplicationResponder
  respond_to :html


  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end

  def after_sign_in_path_for(resource)
    messages_path
  end
  rescue_from CanCan::AccessDenied do |exception|
    flash.now[:danger] = "Acesso negado. Você não está autorizado a acessar essa página"
    redirect_to messages_path, flash: {danger: "Acesso negado. Você não está autorizado a acessar essa página"}
  end
  private

  def layout_by_resource
    if devise_controller?
      'login'
    else
      'application'
    end
  end

  def require_login
    unless user_signed_in?
      flash[:error] = "You must be logged in to access this section"
      redirect_to new_user_session_path # halts request cycle
    end
  end
end
