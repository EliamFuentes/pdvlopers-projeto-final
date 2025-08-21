import styles from './PromotionForm.module.css';

export const PromotionForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para criar a promoção
    console.log('Promoção criada!');
    onClose(); // Fecha o modal após criar
  };

  const handleCancel = () => {
    onClose(); // Fecha o modal sem salvar
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Nome da Promoção</label>
          <input 
            type="text" 
            className={styles.input}
            placeholder="Ex: Dobro de Pontos"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Descrição</label>
          <textarea 
            className={styles.textarea}
            rows="3"
            placeholder="Descreva os benefícios da promoção"
            required
          ></textarea>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Segmento</label>
            <select className={styles.select} required>
              <option value="">Selecione um segmento</option>
              <option>Todos os clientes</option>
              <option>Clientes Bronze</option>
              <option>Clientes Silver</option>
              <option>Clientes Gold</option>
              <option>Clientes VIP</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Validade</label>
            <input 
              type="date" 
              className={styles.input}
              required
            />
          </div>
        </div>
        
        <div className={styles.formActions}>
          <button 
            type="button"
            className={styles.cancelButton}
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className={styles.submitButton}
          >
            Criar Promoção
          </button>
        </div>
      </form>
    </div>
  );
};