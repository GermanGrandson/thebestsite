class SiteMailer < ActionMailer::Base

  def send_message(name, email, message)

    mail to: 'ganieto1@gmail.com', subject: "Site message from #{name}", from: email, body: message

  end

end
