import React, { Component } from 'react'

export default class NewMessage extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 col-lg-offset-1 col-md-7 col-md-offset-4">
            <div class="card">
              <div class="header">
                <h4 class="title">AgendaMail</h4>
                <p class="category">Escreva a mensagem.</p>
              </div>
              <div class="content table-responsive table-full-width">
                <form class="new_message" id="new_message" action="/messages" accept-charset="UTF-8" method="post">
                  <input name="utf8" type="hidden" value="✓"/>
                  <input type="hidden" name="authenticity_token" value="YqatotcA4jxKjI3u2D02B3dwchzjizX7YvDlfSEoIQhPNl6O7ZtiWJU9bpjB3gf0IP6WENyLq/EH/TxQ0aV1YQ=="/>
                  <div class="row">
                    <div class="col-md-11">
                      <div class="form-group login_input">
                        <label for="message_Para:">Para:</label>
                        <input class="form-control border-input" placeholder="Email" required="required" type="text" name="message[receiver_email]" id="message_receiver_email"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-11">
                      <div class="form-group login_input">
                        <label for="message_Assunto">Assunto</label>
                        <input class="form-control border-input" placeholder="Assunto" required="required" type="text" name="message[title]" id="message_title"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-11">
                      <div class="form-group login_input">
                        <label for="message_Conteúdo">Conteúdo</label>
                        <textarea class="form-control border-input" required="required" name="message[content]" id="message_content"></textarea>
                      </div>
                    </div>
                  </div>
                <div class="text-center">
                  <button class="btn btn-info btn-fill btn-wd" type="submit"> Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
