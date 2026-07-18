export interface Course {
  id: number;
  name: string;
  trainer: string;
  credits: number | null;
  enrolled: boolean;
  gradeStatus: 'passed' | 'failed' | 'pending';
}