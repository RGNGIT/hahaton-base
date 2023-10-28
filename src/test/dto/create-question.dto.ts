import CreateAnswerDto from "./create-answer.dto";

export default class CreateQuestionDto {
  text: string;
  answers: Array<CreateAnswerDto>
}