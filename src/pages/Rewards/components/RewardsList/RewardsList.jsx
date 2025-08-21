import { useState } from 'react';
import styles from './RewardsList.module.css';
import { Gift } from 'lucide-react';
import { ModalRewardsList } from './ModalRewardsList';
import { RewardForm } from '../RewardForm/RewardForm';

export const RewardsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const rewardsList = [
    { id: 1, name: "Desconto 10%", points: 100, available: true },
    { id: 2, name: "Produto Grátis", points: 250, available: true },
    { id: 3, name: "Desconto 20%", points: 500, available: false },
    { id: 4, name: "Brinde Especial", points: 1000, available: false },
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
        <h3 className={styles.title}>Recompensas Disponíveis</h3>

        {/* Botão */}
        <div className={styles.newRewardButton} onClick={handleOpenModal}>
          <Gift className={styles.icon} />
          <button className={styles.button}>
            Nova Recompensa
          </button>
        </div>
      </div>
      
      {/* Cada Card */}
      <div className={styles.grid}>
        {rewardsList.map((reward) => (
          <div 
            key={reward.id} 
            className={`${styles.card} ${!reward.available ? styles.cardDisabled : ''}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{reward.name}</h3>
              <p className={reward.available ? styles.cardStatusActive : styles.cardStatusInactive}>
                {reward.available ? 'Disponível' : 'Indisponível'}
              </p>
            </div>

            
            <p className={styles.cardPoints}>{reward.points}</p>
            <p className={styles.cardDescription}>pontos necessários</p>
            

            <button 
              className={reward.available ? styles.cardButtonActive : styles.cardButtonDisabled}
              disabled={!reward.available}
            >
              {reward.available ? 'Configurar' : 'Indisponível'}
            </button>
          </div>
        ))}
      </div>

      {/* Modal com o formulário */}
      <ModalRewardsList 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Nova Recompensa"
      >
        <RewardForm onClose={handleCloseModal} />
      </ModalRewardsList>
    </div>
  );
};