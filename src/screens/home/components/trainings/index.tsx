import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { TrainingCard } from '../training-card';

export function Trainings() {
  const { t } = useTranslation('home');

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.label}>{t('label_1')}</Text>
        <TrainingCard weekday={0} title='Peito, tríceps, ombro e adbdômen' description='Descrição' />
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.label}>{t('label_2')}</Text>
        <View style={styles.secondContainerContent}>
          <TrainingCard weekday={1} exercicesCount={3} title='Quadríceps' description='Descrição DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição' />
          <TrainingCard weekday={2} exercicesCount={4} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={3} exercicesCount={5} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={4} exercicesCount={3} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={5} exercicesCount={4} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={6} exercicesCount={5} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={6} exercicesCount={4} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={0} exercicesCount={4} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={1} exercicesCount={5} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={2} exercicesCount={3} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={3} exercicesCount={4} title='Quadríceps' description='Descrição' />
          <TrainingCard weekday={4} exercicesCount={3} title='Quadríceps' description='Descrição' />
        </View>
      </View>
    </View>
  )
}