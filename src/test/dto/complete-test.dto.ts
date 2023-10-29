export default class CompleteTestDto {
  test_id: number;
  answers: Array<{ answer_id: number, score: number }>;
}