import { useState } from 'react';
import styles from './PromotionsList.module.css';
import { Trophy } from 'lucide-react';
import { ModalPromotionList } from './ModalPromotionList';
import { PromotionForm } from '../PromotionForm/PromotionForm';

export const PromotionsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const promotions = [
    {
      name: "Dobro de Pontos",
      description: "Ganhe pontos em dobro em compras acima de R$ 100",
      segment: "Clientes VIP",
      validUntil: "14/02/2024",
      status: "Ativa"
    },
    {
      name: "Cashback 5%",
      description: "Receba 5% de volta em pontos",
      segment: "Todos os clientes",
      validUntil: "30/01/2024",
      status: "Ativa"
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Promoções Ativas</h3>
        <div className={styles.newPromotionButton} onClick={handleOpenModal}> 
          <Trophy className={styles.icon} />
          <button className={styles.button}>
            Nova Promoção 
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.promotionsContainer}>
          {promotions.map((promo, index) => (
            <div key={index} className={styles.promotionCard}>

              {/* Header do Card*/}
              <div className={styles.promotionInfoHeader}>
                <div className={styles.promotionCardTitle}>
                  <h4 className={styles.promotionName}>{promo.name}</h4>
                  <p className={styles.promotionDescription}>{promo.description}</p>
                </div>
                <p className={styles.promotionStatus}>{promo.status}</p>
              </div>

              {/* Footer do Card */}
              <div className={styles.promotionInfoMetaActions}>
                {/* Informações */}
                <div className={styles.promotionDetails}>
                  <p className={styles.segment}>Segmento: {promo.segment}</p>
                  <p className={styles.validUntil}>Validade até: {promo.validUntil}</p>
                </div>

                {/* Botões de Ação */}
                <div className={styles.actionsContainer}>
                  <button className={styles.editButton}>
                    Editar
                  </button>
                  <button className={styles.pauseButton}>
                    Pausar
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Modal com o formulário */}
      <ModalPromotionList 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Nova Promoção"
      >
        <PromotionForm onClose={handleCloseModal} />
      </ModalPromotionList>
    </div>
  );
};