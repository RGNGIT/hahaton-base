import CreateAnswerDto from "../create-answer.dto";
import CreateQuestionDto from "../create-question.dto";
import CreateTestDto from "../create-test.dto";

export default class TestDto {
  test: CreateTestDto;
  questions: Array<{
    text: string;
    blob_id: number;
    answers: Array<CreateAnswerDto>
  }>
}