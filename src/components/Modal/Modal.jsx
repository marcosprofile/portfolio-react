import './modal.css';

export default function Modal() {
  return (
    <>
      <button type="button" class="btn primary" data-bs-toggle="modal" data-bs-target="#modalContato">
        Contato
      </button>

      <div class="modal fade" id="modalContato" tabindex="-1" aria-labelledby="modalContatoLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="modalContatoLabel">Contato</h1>
            </div>
            <div class="modal-body">
              <p><strong>E-mail:</strong></p>
              <p>marcos.designtech@hotmail.com</p>
              <p><strong>WhatsApp:</strong></p>
              <p>(11) 95437 5410</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}