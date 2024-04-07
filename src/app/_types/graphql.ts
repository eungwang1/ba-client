/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AcceptExamCategoryInvitationInput = {
  categoryId: Scalars['Float']['input'];
};

export type AcceptExamCategoryInvitationOutput = {
  __typename?: 'AcceptExamCategoryInvitationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type AddExamToCategoryInput = {
  categoryId: Scalars['Float']['input'];
  examId: Scalars['Float']['input'];
};

export type AddExamToCategoryOutput = {
  __typename?: 'AddExamToCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Attendance = {
  __typename?: 'Attendance';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type AttendanceInputTyper = {
  content: Scalars['String']['input'];
  user: UserInputType;
};

export type BlogCategory = {
  __typename?: 'BlogCategory';
  categoryName: Scalars['String']['output'];
  postCnt: Scalars['Float']['output'];
};

export type BlogInfo = {
  __typename?: 'BlogInfo';
  blogDirectoryName: Scalars['String']['output'];
  blogName: Scalars['String']['output'];
  blogVisitor?: Maybe<Array<BlogVisitor>>;
  influencerUrl: Scalars['String']['output'];
  subscriberCount: Scalars['Float']['output'];
  totalVisitorCount: Scalars['Float']['output'];
};

export type BlogVisitor = {
  __typename?: 'BlogVisitor';
  date: Scalars['String']['output'];
  visitor: Scalars['String']['output'];
};

export type CategoryEvaluation = {
  __typename?: 'CategoryEvaluation';
  category: MockExamCategory;
  created_at: Scalars['DateTime']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isSecret?: Maybe<Scalars['Boolean']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type CategoryEvaluationInputType = {
  category: MockExamCategoryInputType;
  feedback?: InputMaybe<Scalars['String']['input']>;
  isSecret?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  user: UserInputType;
};

export type ChangeClientRoleAndCreatePaymentInput = {
  changeClientRoleInput: ChangeClientRoleInput;
  createPaymentInput: CreatePaymentInput;
};

export type ChangeClientRoleAndCreatePaymentOutput = {
  __typename?: 'ChangeClientRoleAndCreatePaymentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  paymentId?: Maybe<Scalars['Float']['output']>;
};

export type ChangeClientRoleInput = {
  role: UserRole;
};

export type ChangePasswordAfterVerifyingInput = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ChangePasswordAfterVerifyingOutput = {
  __typename?: 'ChangePasswordAfterVerifyingOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CheckDiscountCodeInput = {
  code: Scalars['String']['input'];
};

export type CheckDiscountCodeOutput = {
  __typename?: 'CheckDiscountCodeOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CheckIfCategoryEvaluatedInput = {
  categoryId: Scalars['Float']['input'];
};

export type CheckIfCategoryEvaluatedOutput = {
  __typename?: 'CheckIfCategoryEvaluatedOutput';
  error?: Maybe<Scalars['String']['output']>;
  isEvaluated?: Maybe<Scalars['Boolean']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CheckPasswordInput = {
  password: Scalars['String']['input'];
};

export type CheckPasswordOutput = {
  __typename?: 'CheckPasswordOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CheckUserRoleInput = {
  roleIds: Array<Scalars['Float']['input']>;
};

export type CheckUserRoleOutput = {
  __typename?: 'CheckUserRoleOutput';
  confirmed: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CoreOutput = {
  __typename?: 'CoreOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateAttendanceInput = {
  content: Scalars['String']['input'];
};

export type CreateAttendanceOutput = {
  __typename?: 'CreateAttendanceOutput';
  attendance?: Maybe<Attendance>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateCategoryEvaluationInput = {
  categoryId: Scalars['Float']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  isSecret?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCategoryEvaluationOutput = {
  __typename?: 'CreateCategoryEvaluationOutput';
  categoryEvaluation?: Maybe<CategoryEvaluation>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateExamCategoryInvitationInput = {
  categoryId: Scalars['Float']['input'];
  userIdForInvitation: Scalars['Float']['input'];
};

export type CreateExamCategoryInvitationOutput = {
  __typename?: 'CreateExamCategoryInvitationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateExamCategoryViewerInput = {
  categoryId: Scalars['Float']['input'];
  viewerId: Scalars['Float']['input'];
};

export type CreateExamCategoryViewerOutput = {
  __typename?: 'CreateExamCategoryViewerOutput';
  error?: Maybe<Scalars['String']['output']>;
  examViewer?: Maybe<ExamViewer>;
  ok: Scalars['Boolean']['output'];
};

export type CreateFeedbackInput = {
  content: Scalars['String']['input'];
};

export type CreateFeedbackOutput = {
  __typename?: 'CreateFeedbackOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateFreeTrialRoleOutput = {
  __typename?: 'CreateFreeTrialRoleOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateMockExamCategoryOutput = {
  __typename?: 'CreateMockExamCategoryOutput';
  category?: Maybe<MockExamCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamHistoryInput = {
  examId: Scalars['Float']['input'];
};

export type CreateMockExamHistoryOutput = {
  __typename?: 'CreateMockExamHistoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamInput = {
  categoryName: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMockExamOutput = {
  __typename?: 'CreateMockExamOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExam?: Maybe<MockExam>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamQuestionCommentInput = {
  content: Scalars['String']['input'];
  questionId: Scalars['Float']['input'];
};

export type CreateMockExamQuestionCommentOutput = {
  __typename?: 'CreateMockExamQuestionCommentOutput';
  comment: MockExamQuestionComment;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamQuestionFeedbackInput = {
  content: Scalars['String']['input'];
  questionId: Scalars['Float']['input'];
  type?: QuestionFeedbackType;
};

export type CreateMockExamQuestionFeedbackOutput = {
  __typename?: 'CreateMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<MockExamQuestionFeedback>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamQuestionInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  mockExamId: Scalars['Float']['input'];
  number: Scalars['Float']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
  question_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
};

export type CreateMockExamQuestionMultipleChoiceInput = {
  answer: Scalars['Float']['input'];
  options: Array<MockExamQuestionMultipleChoiceOptionInputType>;
  questionId: Scalars['Float']['input'];
};

export type CreateMockExamQuestionMultipleChoiceOutput = {
  __typename?: 'CreateMockExamQuestionMultipleChoiceOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateMockExamQuestionOutput = {
  __typename?: 'CreateMockExamQuestionOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questionId?: Maybe<Scalars['Float']['output']>;
};

export type CreateNoticeInput = {
  content: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  reservationTime?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Float']['input'];
};

export type CreateNoticeOutput = {
  __typename?: 'CreateNoticeOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateOrUpdateMockExamQuestionStateInput = {
  questionId: Scalars['Float']['input'];
  state: QuestionState;
};

export type CreateOrUpdateMockExamQuestionStateOutput = {
  __typename?: 'CreateOrUpdateMockExamQuestionStateOutput';
  currentState?: Maybe<QuestionState>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateOrUpdateTodoInput = {
  dateString: Scalars['String']['input'];
  todoList?: Array<TodoListInputType>;
};

export type CreateOrUpdateTodoOutput = {
  __typename?: 'CreateOrUpdateTodoOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export type CreatePaymentInput = {
  orderId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productName: Scalars['String']['input'];
  receiptId: Scalars['String']['input'];
};

export type CreatePaymentOutput = {
  __typename?: 'CreatePaymentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  payment?: Maybe<Payment>;
};

export type CreatePostCommentInput = {
  content: Scalars['String']['input'];
  postId: Scalars['Float']['input'];
};

export type CreatePostCommentOutput = {
  __typename?: 'CreatePostCommentOutput';
  comment: PostComment;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreatePostInput = {
  category?: InputMaybe<PostCategory>;
  content: Scalars['String']['input'];
  data?: InputMaybe<PostDataInput>;
  title: Scalars['String']['input'];
};

export type CreatePostOutput = {
  __typename?: 'CreatePostOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  postId?: Maybe<Scalars['Float']['output']>;
};

export type CreateQuestionCardCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateQuestionCardCategoryOutput = {
  __typename?: 'CreateQuestionCardCategoryOutput';
  category?: Maybe<QuestionCardCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateQuestionCardInput = {
  categoryId: Scalars['Float']['input'];
  question: Scalars['String']['input'];
  solution: Scalars['String']['input'];
};

export type CreateQuestionCardOutput = {
  __typename?: 'CreateQuestionCardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questionCard?: Maybe<QuestionCard>;
};

export type CreateQuizCommentInput = {
  content: Scalars['String']['input'];
  quizId: Scalars['Float']['input'];
};

export type CreateQuizCommentOutput = {
  __typename?: 'CreateQuizCommentOutput';
  comment?: Maybe<QuizComment>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateQuizInput = {
  categoryId: Scalars['Float']['input'];
};

export type CreateQuizOutput = {
  __typename?: 'CreateQuizOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateUserRoleInput = {
  roleId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type CreateUserRoleOutput = {
  __typename?: 'CreateUserRoleOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  roleId?: Maybe<Scalars['Float']['output']>;
};

export type CreateVideoInput = {
  size: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};

export type CreateVideoOutput = {
  __typename?: 'CreateVideoOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateVisitHistoryOutput = {
  __typename?: 'CreateVisitHistoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  todayViewCount?: Maybe<Scalars['Float']['output']>;
  totalViewCount?: Maybe<Scalars['Float']['output']>;
};

export type DeleteAttendanceInput = {
  id: Scalars['Float']['input'];
};

export type DeleteAttendanceOutput = {
  __typename?: 'DeleteAttendanceOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteCategoryEvaluationInput = {
  id: Scalars['Float']['input'];
};

export type DeleteCategoryEvaluationOutput = {
  __typename?: 'DeleteCategoryEvaluationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteExamCategoryBookmarkInput = {
  categoryId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type DeleteExamCategoryBookmarkOutput = {
  __typename?: 'DeleteExamCategoryBookmarkOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteExamCategoryInvitationInput = {
  invitationId: Scalars['Float']['input'];
};

export type DeleteExamCategoryInvitationOutput = {
  __typename?: 'DeleteExamCategoryInvitationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteExamCategoryViewerInput = {
  categoryId: Scalars['Float']['input'];
  examViewerId: Scalars['Float']['input'];
  executor?: Scalars['String']['input'];
};

export type DeleteExamCategoryViewerOutput = {
  __typename?: 'DeleteExamCategoryViewerOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteMockExamCategoryInput = {
  id: Scalars['Float']['input'];
};

export type DeleteMockExamCategoryOutput = {
  __typename?: 'DeleteMockExamCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteMockExamInput = {
  id: Scalars['Float']['input'];
};

export type DeleteMockExamOutput = {
  __typename?: 'DeleteMockExamOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteMockExamQuestionCommentInput = {
  id: Scalars['Float']['input'];
};

export type DeleteMockExamQuestionCommentOutput = {
  __typename?: 'DeleteMockExamQuestionCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteMockExamQuestionFeedbackInput = {
  id: Scalars['Float']['input'];
};

export type DeleteMockExamQuestionFeedbackOutput = {
  __typename?: 'DeleteMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteMockExamQuestionInput = {
  id: Scalars['Float']['input'];
};

export type DeleteMockExamQuestionOutput = {
  __typename?: 'DeleteMockExamQuestionOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteNoticeInput = {
  noticeId: Scalars['Float']['input'];
};

export type DeleteNoticeOutput = {
  __typename?: 'DeleteNoticeOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeletePaymentInput = {
  paymentId: Scalars['Float']['input'];
};

export type DeletePaymentOutput = {
  __typename?: 'DeletePaymentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeletePostCommentInput = {
  id: Scalars['Float']['input'];
};

export type DeletePostCommentOutput = {
  __typename?: 'DeletePostCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeletePostInput = {
  id: Scalars['Float']['input'];
};

export type DeletePostOutput = {
  __typename?: 'DeletePostOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteQuestionCardCategoryInput = {
  id: Scalars['Float']['input'];
};

export type DeleteQuestionCardCategoryOutput = {
  __typename?: 'DeleteQuestionCardCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteQuestionCardsInput = {
  ids: Array<Scalars['Float']['input']>;
};

export type DeleteQuestionCardsOutput = {
  __typename?: 'DeleteQuestionCardsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteQuizCommentInput = {
  id: Scalars['Float']['input'];
};

export type DeleteQuizCommentOutput = {
  __typename?: 'DeleteQuizCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteUserRoleInput = {
  id: Scalars['Float']['input'];
};

export type DeleteUserRoleOutput = {
  __typename?: 'DeleteUserRoleOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DiscountCode = {
  __typename?: 'DiscountCode';
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  status: DiscountCodeStatus;
  type: DiscountCodeType;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export enum DiscountCodeStatus {
  Pending = 'PENDING',
  Unused = 'UNUSED',
  Used = 'USED'
}

export enum DiscountCodeType {
  EhsMaster = 'EHS_MASTER',
  MoudCbt = 'MOUD_CBT'
}

export type Discountcode = {
  code: Scalars['String']['input'];
  status: DiscountCodeStatus;
  type: DiscountCodeType;
  user: UserInputType;
};

export type EditMockExamCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type EditMockExamInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Float']['input'];
  status?: InputMaybe<ExamStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditMockExamOutput = {
  __typename?: 'EditMockExamOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditMockExamQuestionBookmarkInput = {
  questionId: Scalars['Float']['input'];
};

export type EditMockExamQuestionBookmarkOutput = {
  __typename?: 'EditMockExamQuestionBookmarkOutput';
  currentState: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditMockExamQuestionCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type EditMockExamQuestionCommentLikeInput = {
  commentId: Scalars['Float']['input'];
};

export type EditMockExamQuestionCommentLikeOutput = {
  __typename?: 'EditMockExamQuestionCommentLikeOutput';
  currentState: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditMockExamQuestionCommentOutput = {
  __typename?: 'EditMockExamQuestionCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditMockExamQuestionFeedbackInput = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  type: QuestionFeedbackType;
};

export type EditMockExamQuestionFeedbackOutput = {
  __typename?: 'EditMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditMockExamQuestionInput = {
  id: Scalars['Float']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
};

export type EditMockExamQuestionOutput = {
  __typename?: 'EditMockExamQuestionOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditNoticeInput = {
  confirm?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  noticeId: Scalars['Float']['input'];
  reservationTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditNoticeOutput = {
  __typename?: 'EditNoticeOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditPostCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type EditPostCommentLikeInput = {
  commentId: Scalars['Float']['input'];
};

export type EditPostCommentLikeOutput = {
  __typename?: 'EditPostCommentLikeOutput';
  currentState: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditPostCommentOutput = {
  __typename?: 'EditPostCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditPostInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<PostDataInput>;
  id: Scalars['Float']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditPostLikeInput = {
  postId: Scalars['Float']['input'];
};

export type EditPostLikeOutput = {
  __typename?: 'EditPostLikeOutput';
  currentState: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditPostOutput = {
  __typename?: 'EditPostOutput';
  content?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type EditProfileInput = {
  hasBookmarkedBefore?: InputMaybe<Scalars['Boolean']['input']>;
  hasReachedPaymentReminder?: InputMaybe<Scalars['Boolean']['input']>;
  hasSolvedBefore?: InputMaybe<Scalars['Boolean']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  printLimit?: InputMaybe<Scalars['Float']['input']>;
  profileImg?: InputMaybe<Scalars['String']['input']>;
  randomExamLimit?: InputMaybe<Scalars['Float']['input']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditQuizCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type EditQuizCommentLikeInput = {
  commentId: Scalars['Float']['input'];
};

export type EditQuizCommentLikeOutput = {
  __typename?: 'EditQuizCommentLikeOutput';
  currentState: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditQuizCommentOutput = {
  __typename?: 'EditQuizCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EmailVerificationInput = {
  code: Scalars['String']['input'];
};

export type EmailVerificationOutput = {
  __typename?: 'EmailVerificationOutput';
  email: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ExamCategoryBookmark = {
  __typename?: 'ExamCategoryBookmark';
  category: MockExamCategory;
  created_at: Scalars['DateTime']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type ExamCategoryBookmarkInputType = {
  category: MockExamCategoryInputType;
  user: UserInputType;
};

export type ExamCategoryInvitation = {
  __typename?: 'ExamCategoryInvitation';
  category: MockExamCategory;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type ExamCategoryInvitationInputType = {
  category: MockExamCategoryInputType;
  user: UserInputType;
};

export type ExamCoAuthor = {
  __typename?: 'ExamCoAuthor';
  created_at: Scalars['DateTime']['output'];
  exam: MockExam;
  examCategory: MockExamCategory;
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type ExamCoAuthorInputType = {
  exam: MockExamInputType;
  examCategory: MockExamCategoryInputType;
  user: UserInputType;
};

export type ExamLike = {
  __typename?: 'ExamLike';
  exam: MockExam;
  user: User;
};

export type ExamLikeInputType = {
  exam: MockExamInputType;
  user: UserInputType;
};

export type ExamOrder = {
  examId: Scalars['Float']['input'];
  order: Scalars['Float']['input'];
};

export enum ExamSource {
  EhsMaster = 'EHS_MASTER',
  MoudCbt = 'MOUD_CBT',
  User = 'USER'
}

export enum ExamStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Request = 'REQUEST',
  Unset = 'UNSET'
}

export type ExamTitleAndId = {
  __typename?: 'ExamTitleAndId';
  id: Scalars['Float']['output'];
  order: Scalars['Float']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  status: ExamStatus;
  title: Scalars['String']['output'];
};

export type ExamTitleAndIdByQuestionComment = {
  __typename?: 'ExamTitleAndIdByQuestionComment';
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export enum ExamType {
  Objective = 'OBJECTIVE',
  Subjective = 'SUBJECTIVE'
}

export type ExamViewer = {
  __typename?: 'ExamViewer';
  created_at: Scalars['DateTime']['output'];
  exam: MockExam;
  examCategory: MockExamCategory;
  id: Scalars['Float']['output'];
  isApprove: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type ExamViewerInput = {
  exam: MockExamInputType;
  examCategory: MockExamCategoryInputType;
  isApprove: Scalars['Boolean']['input'];
  user: UserInputType;
};

export type Feedback = {
  __typename?: 'Feedback';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type FeedbackInputType = {
  content: Scalars['String']['input'];
  user: UserInputType;
};

export type FindMyExamHistoryInput = {
  categoryIds: Array<Scalars['Float']['input']>;
};

export type FindMyExamHistoryOutput = {
  __typename?: 'FindMyExamHistoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  titleAndId?: Maybe<Array<TitleAndId>>;
};

export type GetBlogCategoryListInput = {
  blogId: Scalars['String']['input'];
};

export type GetBlogCategoryListOutput = {
  __typename?: 'GetBlogCategoryListOutput';
  categories?: Maybe<Array<BlogCategory>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  postCnt?: Maybe<Scalars['Float']['output']>;
};

export type GetBlogInfoInput = {
  blogId: Scalars['String']['input'];
};

export type GetBlogInfoOutput = {
  __typename?: 'GetBlogInfoOutput';
  blogInfo?: Maybe<BlogInfo>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetBuyersOutput = {
  __typename?: 'GetBuyersOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  userAndRoles?: Maybe<Array<UserAndRole>>;
};

export type GetCategoryEvaluationInput = {
  categoryId: Scalars['Float']['input'];
};

export type GetCategoryEvaluationOutput = {
  __typename?: 'GetCategoryEvaluationOutput';
  categoryEvaluations?: Maybe<Array<CategoryEvaluation>>;
  error?: Maybe<Scalars['String']['output']>;
  isEvaluated?: Maybe<Scalars['Boolean']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetExamCategoriesInput = {
  categoryIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  categoryMakerId?: InputMaybe<Scalars['Float']['input']>;
  examSource?: InputMaybe<ExamSource>;
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  isPublicOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};

export type GetExamCategoriesOutput = {
  __typename?: 'GetExamCategoriesOutput';
  categories?: Maybe<Array<MockExamCategory>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetExamCategoryInvitationsOutput = {
  __typename?: 'GetExamCategoryInvitationsOutput';
  error?: Maybe<Scalars['String']['output']>;
  invitations?: Maybe<Array<ExamCategoryInvitation>>;
  ok: Scalars['Boolean']['output'];
};

export type GetExamCategoryLearningProgressInput = {
  categoryId: Scalars['Float']['input'];
};

export type GetExamCategoryLearningProgressOutput = {
  __typename?: 'GetExamCategoryLearningProgressOutput';
  error?: Maybe<Scalars['String']['output']>;
  highScoreCount?: Maybe<Scalars['Float']['output']>;
  lowScoreCount?: Maybe<Scalars['Float']['output']>;
  ok: Scalars['Boolean']['output'];
  totalQuestionCount?: Maybe<Scalars['Float']['output']>;
};

export type GetExamCategorySubscribersInput = {
  categoryId: Scalars['Float']['input'];
};

export type GetExamCategorySubscribersOutput = {
  __typename?: 'GetExamCategorySubscribersOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  users?: Maybe<Array<User>>;
};

export type GetExamCategoryViewrsInput = {
  categoryId: Scalars['Float']['input'];
};

export type GetExamCategoryViewrsOutput = {
  __typename?: 'GetExamCategoryViewrsOutput';
  error?: Maybe<Scalars['String']['output']>;
  examViewers?: Maybe<Array<ExamViewer>>;
  ok: Scalars['Boolean']['output'];
};

export type GetExamTitleWithFeedbackOutput = {
  __typename?: 'GetExamTitleWithFeedbackOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  titles: Array<GetExamTitleWithFeedbackTitle>;
};

export type GetExamTitleWithFeedbackTitle = {
  __typename?: 'GetExamTitleWithFeedbackTitle';
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type GetFeedbacksByRecommendationCountInput = {
  count: Scalars['Float']['input'];
};

export type GetFeedbacksByRecommendationCountOutput = {
  __typename?: 'GetFeedbacksByRecommendationCountOutput';
  error?: Maybe<Scalars['String']['output']>;
  feedbacks?: Maybe<Array<MockExamQuestionFeedback>>;
  ok: Scalars['Boolean']['output'];
};

export type GetFeedbacksWithFilterInput = {
  badCount: Scalars['Float']['input'];
  examId: Scalars['Float']['input'];
  goodCount: Scalars['Float']['input'];
  types: Array<QuestionFeedbackType>;
};

export type GetFeedbacksWithFilterOutput = {
  __typename?: 'GetFeedbacksWithFilterOutput';
  error?: Maybe<Scalars['String']['output']>;
  feedbacks: Array<MockExamQuestionFeedback>;
  ok: Scalars['Boolean']['output'];
};

export type GetInvitedExamsOutput = {
  __typename?: 'GetInvitedExamsOutput';
  error?: Maybe<Scalars['String']['output']>;
  examViewers?: Maybe<Array<ExamViewer>>;
  ok: Scalars['Boolean']['output'];
};

export type GetKeywordSearchCountInput = {
  keyword: Scalars['String']['input'];
};

export type GetKeywordSearchCountOutput = {
  __typename?: 'GetKeywordSearchCountOutput';
  error?: Maybe<Scalars['String']['output']>;
  keywordList?: Maybe<Array<NaverKeywordSearchCount>>;
  ok: Scalars['Boolean']['output'];
};

export type GetMyAllExamCategoriesLearningProgressOutput = {
  __typename?: 'GetMyAllExamCategoriesLearningProgressOutput';
  error?: Maybe<Scalars['String']['output']>;
  highScoreCount?: Maybe<Scalars['Float']['output']>;
  lowScoreCount?: Maybe<Scalars['Float']['output']>;
  ok: Scalars['Boolean']['output'];
  totalQuestionCount?: Maybe<Scalars['Float']['output']>;
};

export type GetMyBlogPostRankInput = {
  blogName: Scalars['String']['input'];
  keyword: Scalars['String']['input'];
};

export type GetMyBlogPostRankOutput = {
  __typename?: 'GetMyBlogPostRankOutput';
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  postInfo?: Maybe<PostInfo>;
  searchCounts?: Maybe<SearchCounts>;
};

export type GetMyBookmarkedExamCategoriesOutput = {
  __typename?: 'GetMyBookmarkedExamCategoriesOutput';
  categories?: Maybe<Array<MockExamCategory>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetMyBookmarkedExamsOutput = {
  __typename?: 'GetMyBookmarkedExamsOutput';
  error?: Maybe<Scalars['String']['output']>;
  exams?: Maybe<Array<MockExam>>;
  ok: Scalars['Boolean']['output'];
};

export type GetMyExamCategoriesOutput = {
  __typename?: 'GetMyExamCategoriesOutput';
  categories?: Maybe<Array<MockExamCategory>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetMyExamsInput = {
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetMyExamsOutput = {
  __typename?: 'GetMyExamsOutput';
  error?: Maybe<Scalars['String']['output']>;
  exams?: Maybe<Array<MockExam>>;
  ok: Scalars['Boolean']['output'];
};

export type GetMyPaymentsOutput = {
  __typename?: 'GetMyPaymentsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  payments?: Maybe<Array<Payment>>;
};

export type GetPartnersOutput = {
  __typename?: 'GetPartnersOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  partners?: Maybe<Array<Partner>>;
};

export type GetQuizsInput = {
  categoryId: Scalars['Float']['input'];
  date: Scalars['String']['input'];
};

export type GetQuizsOutput = {
  __typename?: 'GetQuizsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  quizs?: Maybe<Array<Quiz>>;
};

export type GetRoleCountInput = {
  roleId: Scalars['Float']['input'];
};

export type GetRoleCountOutput = {
  __typename?: 'GetRoleCountOutput';
  count?: Maybe<Scalars['Float']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetRolesCountInput = {
  roleIds: Array<Scalars['Float']['input']>;
};

export type GetRolesCountOutput = {
  __typename?: 'GetRolesCountOutput';
  count?: Maybe<Scalars['Float']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetSearchAvailabilityInput = {
  blogId: Scalars['String']['input'];
  itemCount: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};

export type GetSearchAvailabilityOutput = {
  __typename?: 'GetSearchAvailabilityOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  posts?: Maybe<Array<NaverPostInfo>>;
};

export type GetSearchRankInput = {
  blogId: Scalars['String']['input'];
  keyword: Scalars['String']['input'];
};

export type GetSearchRankOutput = {
  __typename?: 'GetSearchRankOutput';
  daumBlogSearchRank?: Maybe<Scalars['Float']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  naverBlogSearchRank?: Maybe<Scalars['Float']['output']>;
  ok: Scalars['Boolean']['output'];
  postLink?: Maybe<Scalars['String']['output']>;
};

export type GetTodayAttendanceOutput = {
  __typename?: 'GetTodayAttendanceOutput';
  attendances?: Maybe<Array<Attendance>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetTodoInput = {
  dateString: Scalars['String']['input'];
};

export type GetTodoOutput = {
  __typename?: 'GetTodoOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
};

export type GetUserByNicknameOrEmailInput = {
  keyword: Scalars['String']['input'];
};

export type GetUserByNicknameOrEmailOutput = {
  __typename?: 'GetUserByNicknameOrEmailOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export enum LoginType {
  Email = 'EMAIL',
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Naver = 'NAVER'
}

export type MeOutput = {
  __typename?: 'MeOutput';
  error?: Maybe<Scalars['String']['output']>;
  notices?: Maybe<Array<Notice>>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type MockExam = {
  __typename?: 'MockExam';
  approved: Scalars['Boolean']['output'];
  created_at: Scalars['DateTime']['output'];
  examBookmarks: Array<MockExamBookmark>;
  examCoAuthor?: Maybe<Array<ExamCoAuthor>>;
  examLikes: Array<ExamLike>;
  examViewer?: Maybe<Array<ExamViewer>>;
  history: Array<MockExamHistory>;
  id: Scalars['Float']['output'];
  isBookmarked?: Maybe<Scalars['Boolean']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  isPremium: Scalars['Boolean']['output'];
  mockExamCategory: Array<MockExamCategory>;
  mockExamQuestion: Array<MockExamQuestion>;
  mockExamQuestionState: Array<MockExamQuestion>;
  order: Scalars['Float']['output'];
  questionOrderIds: Array<Scalars['String']['output']>;
  quiz: Array<Quiz>;
  slug?: Maybe<Scalars['String']['output']>;
  source: ExamSource;
  status: ExamStatus;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
  uuid: Scalars['String']['output'];
};

export type MockExamBookmark = {
  __typename?: 'MockExamBookmark';
  created_at: Scalars['DateTime']['output'];
  exam: MockExam;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamBookmarkInputType = {
  exam: MockExamInputType;
  user: UserInputType;
};

export type MockExamCategory = {
  __typename?: 'MockExamCategory';
  approved: Scalars['Boolean']['output'];
  categoryEvaluations?: Maybe<Array<CategoryEvaluation>>;
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  examCategoryBookmarks: Array<ExamCategoryBookmark>;
  examCategoryInvitations: Array<ExamCategoryInvitation>;
  examCoAuthor?: Maybe<Array<ExamCoAuthor>>;
  examOrderIds: Array<Scalars['Float']['output']>;
  examType: ExamType;
  examViewer?: Maybe<Array<ExamViewer>>;
  hasAccess?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Float']['output'];
  isBookmarked?: Maybe<Scalars['Boolean']['output']>;
  isPublic: Scalars['Boolean']['output'];
  mockExam: Array<MockExam>;
  name: Scalars['String']['output'];
  order: Scalars['Float']['output'];
  partner?: Maybe<Partner>;
  quiz: Array<Quiz>;
  roles: Array<Role>;
  seller?: Maybe<Seller>;
  source: ExamSource;
  type: MockExamCategoryTypes;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamCategoryInputType = {
  approved?: Scalars['Boolean']['input'];
  categoryEvaluations?: InputMaybe<Array<CategoryEvaluationInputType>>;
  description?: Scalars['String']['input'];
  examCategoryBookmarks: Array<ExamCategoryBookmarkInputType>;
  examCategoryInvitations: Array<ExamCategoryInvitationInputType>;
  examCoAuthor?: InputMaybe<Array<ExamCoAuthorInputType>>;
  examOrderIds?: Array<Scalars['Float']['input']>;
  examType: ExamType;
  examViewer?: InputMaybe<Array<ExamViewerInput>>;
  hasAccess?: InputMaybe<Scalars['Boolean']['input']>;
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: Scalars['Boolean']['input'];
  mockExam: Array<MockExamInputType>;
  name: Scalars['String']['input'];
  order: Scalars['Float']['input'];
  partner?: InputMaybe<PartnerInputType>;
  quiz: Array<QuizInputType>;
  roles: Array<RoleInputType>;
  seller?: InputMaybe<SellerInputType>;
  source: ExamSource;
  type: MockExamCategoryTypes;
  user: UserInputType;
};

export enum MockExamCategoryTypes {
  Practical = 'practical',
  Written = 'written'
}

export type MockExamHistory = {
  __typename?: 'MockExamHistory';
  created_at: Scalars['DateTime']['output'];
  exam: MockExam;
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamHistoryInputType = {
  exam: MockExamInputType;
  user: UserInputType;
};

export type MockExamImageType = {
  __typename?: 'MockExamImageType';
  name: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type MockExamInputType = {
  approved?: Scalars['Boolean']['input'];
  examBookmarks: Array<MockExamBookmarkInputType>;
  examCoAuthor?: InputMaybe<Array<ExamCoAuthorInputType>>;
  examLikes: Array<ExamLikeInputType>;
  examViewer?: InputMaybe<Array<ExamViewerInput>>;
  history: Array<MockExamHistoryInputType>;
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  isLiked?: InputMaybe<Scalars['Boolean']['input']>;
  isPremium?: Scalars['Boolean']['input'];
  mockExamCategory: Array<MockExamCategoryInputType>;
  mockExamQuestion: Array<MockExamQuestionInputType>;
  mockExamQuestionState: Array<MockExamQuestionInputType>;
  order?: Scalars['Float']['input'];
  questionOrderIds?: Array<Scalars['String']['input']>;
  quiz: Array<QuizInputType>;
  slug?: InputMaybe<Scalars['String']['input']>;
  source: ExamSource;
  status: ExamStatus;
  title: Scalars['String']['input'];
  user: UserInputType;
  uuid: Scalars['String']['input'];
};

export type MockExamMultipleChoiceOption = {
  __typename?: 'MockExamMultipleChoiceOption';
  content: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  number: Scalars['Float']['output'];
};

export type MockExamQuestion = {
  __typename?: 'MockExamQuestion';
  approved: Scalars['Boolean']['output'];
  commentCount?: Maybe<Scalars['Float']['output']>;
  created_at: Scalars['DateTime']['output'];
  highScore: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  isBookmarked?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lowScore: Scalars['Float']['output'];
  middleScore: Scalars['Float']['output'];
  mockExam?: Maybe<MockExam>;
  mockExamQuestionBookmark: Array<MockExamQuestionBookmark>;
  mockExamQuestionComment: Array<MockExamQuestionComment>;
  mockExamQuestionFeedback: Array<MockExamQuestionFeedback>;
  multipleChoice: Array<MockExamQuestionMultipleChoice>;
  myQuestionState?: Maybe<QuestionState>;
  number: Scalars['Float']['output'];
  objectiveData?: Maybe<ObjectiveData>;
  orderId: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  question_img?: Maybe<Array<MockExamImageType>>;
  question_video?: Maybe<Array<MockExamVideoType>>;
  quiz: Array<Quiz>;
  solution?: Maybe<Scalars['String']['output']>;
  solution_img?: Maybe<Array<MockExamImageType>>;
  state: Array<MockExamQuestionState>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamQuestionBookmark = {
  __typename?: 'MockExamQuestionBookmark';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  question: MockExamQuestion;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamQuestionBookmarkInputType = {
  question: MockExamQuestionInputType;
  user: UserInputType;
};

export type MockExamQuestionComment = {
  __typename?: 'MockExamQuestionComment';
  commentLike: Array<MockExamQuestionCommentLike>;
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  likeState: Scalars['Boolean']['output'];
  likesCount: Scalars['Float']['output'];
  question: MockExamQuestion;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamQuestionCommentInputType = {
  commentLike: Array<MockExamQuestionCommentLikeInputType>;
  content: Scalars['String']['input'];
  likeState?: Scalars['Boolean']['input'];
  likesCount?: Scalars['Float']['input'];
  question: MockExamQuestionInputType;
  user: UserInputType;
};

export type MockExamQuestionCommentLike = {
  __typename?: 'MockExamQuestionCommentLike';
  comment: MockExamQuestionComment;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamQuestionCommentLikeInputType = {
  comment: MockExamQuestionCommentInputType;
  user: UserInputType;
};

export type MockExamQuestionFeedback = {
  __typename?: 'MockExamQuestionFeedback';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  mockExamQuestion: MockExamQuestion;
  myRecommedationStatus: MyRecommedationStatus;
  recommendation: Array<MockExamQuestionFeedbackRecommendation>;
  recommendationCount: RecommendationCount;
  type: QuestionFeedbackType;
  updated_at: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type MockExamQuestionFeedbackInputType = {
  content: Scalars['String']['input'];
  mockExamQuestion: MockExamQuestionInputType;
  myRecommedationStatus: MyRecommedationStatusInputType;
  recommendation: Array<MockExamQuestionFeedbackRecommendationInputType>;
  recommendationCount: RecommendationCountInputType;
  type: QuestionFeedbackType;
  user?: InputMaybe<UserInputType>;
};

export type MockExamQuestionFeedbackRecommendation = {
  __typename?: 'MockExamQuestionFeedbackRecommendation';
  created_at: Scalars['DateTime']['output'];
  feedback: MockExamQuestionFeedback;
  id: Scalars['Float']['output'];
  type: QuestionFeedbackRecommendationType;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamQuestionFeedbackRecommendationInputType = {
  feedback: MockExamQuestionFeedbackInputType;
  type: QuestionFeedbackRecommendationType;
  user: UserInputType;
};

export type MockExamQuestionImageInputType = {
  name: Scalars['String']['input'];
  uid: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type MockExamQuestionInputType = {
  approved?: Scalars['Boolean']['input'];
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  highScore?: Scalars['Float']['input'];
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  lowScore?: Scalars['Float']['input'];
  middleScore?: Scalars['Float']['input'];
  mockExam?: InputMaybe<MockExamInputType>;
  mockExamQuestionBookmark: Array<MockExamQuestionBookmarkInputType>;
  mockExamQuestionComment: Array<MockExamQuestionCommentInputType>;
  mockExamQuestionFeedback: Array<MockExamQuestionFeedbackInputType>;
  multipleChoice: Array<MockExamQuestionMultipleChoiceInputType>;
  myQuestionState?: InputMaybe<QuestionState>;
  number: Scalars['Float']['input'];
  objectiveData?: InputMaybe<MockExamQuestionObjectiveInputType>;
  orderId: Scalars['String']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
  question_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  question_video?: InputMaybe<Array<MockExamQuestionVideoInputType>>;
  quiz: Array<QuizInputType>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  state: Array<MockExamQuestionStateInputType>;
  user: UserInputType;
};

export type MockExamQuestionMultipleChoice = {
  __typename?: 'MockExamQuestionMultipleChoice';
  answer: Scalars['Float']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  options: Array<MockExamMultipleChoiceOption>;
  question: MockExamQuestion;
  updated_at: Scalars['DateTime']['output'];
};

export type MockExamQuestionMultipleChoiceInputType = {
  answer: Scalars['Float']['input'];
  options: Array<MockExamQuestionMultipleChoiceOptionInputType>;
  question: MockExamQuestionInputType;
};

export type MockExamQuestionMultipleChoiceOptionInputType = {
  content: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['Float']['input'];
};

export type MockExamQuestionObjectiveContentInputType = {
  content: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type MockExamQuestionObjectiveInputType = {
  answer: Scalars['Float']['input'];
  content: Array<MockExamQuestionObjectiveContentInputType>;
};

export type MockExamQuestionState = {
  __typename?: 'MockExamQuestionState';
  answer: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  exam: MockExam;
  id: Scalars['Float']['output'];
  question: MockExamQuestion;
  state: QuestionState;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type MockExamQuestionStateInputType = {
  answer: Scalars['String']['input'];
  exam: MockExamInputType;
  question: MockExamQuestionInputType;
  state: QuestionState;
  user: UserInputType;
};

export type MockExamQuestionVideoInputType = {
  size: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};

export type MockExamVideoType = {
  __typename?: 'MockExamVideoType';
  size: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type MoveExamOrderInput = {
  categoryId: Scalars['Float']['input'];
  endIdx: Scalars['Float']['input'];
  startIdx: Scalars['Float']['input'];
};

export type MoveExamOrderOutput = {
  __typename?: 'MoveExamOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptExamCategoryInvitation: AcceptExamCategoryInvitationOutput;
  addExamToCategory: AddExamToCategoryOutput;
  changeClientRole: CoreOutput;
  changeClientRoleAndCreatePayment: ChangeClientRoleAndCreatePaymentOutput;
  changePasswordAfterVerifying: ChangePasswordAfterVerifyingOutput;
  checkDiscountCode: CheckDiscountCodeOutput;
  checkIfCategoryEvaluated: CheckIfCategoryEvaluatedOutput;
  checkPassword: CheckPasswordOutput;
  checkUserRole: CheckUserRoleOutput;
  createAttendance: CreateAttendanceOutput;
  createCategoryEvaluation: CreateCategoryEvaluationOutput;
  createDiscountCode: Scalars['Boolean']['output'];
  createExamCategoryInvitation: CreateExamCategoryInvitationOutput;
  createExamCategoryViewer: CreateExamCategoryViewerOutput;
  createFeedback: CreateFeedbackOutput;
  createFreeTrialRole: CreateFreeTrialRoleOutput;
  createMockExam: CreateMockExamOutput;
  createMockExamCategory: CreateMockExamCategoryOutput;
  createMockExamHistory: CreateMockExamHistoryOutput;
  createMockExamQuestion: CreateMockExamQuestionOutput;
  createMockExamQuestionComment: CreateMockExamQuestionCommentOutput;
  createMockExamQuestionFeedback: CreateMockExamQuestionFeedbackOutput;
  createMutipleChoice: CreateMockExamQuestionMultipleChoiceOutput;
  createNotice: CreateNoticeOutput;
  createOrUpdateMockExamQuestionState: CreateOrUpdateMockExamQuestionStateOutput;
  createOrUpdateTodo: CreateOrUpdateTodoOutput;
  createPayment: CreatePaymentOutput;
  createPost: CreatePostOutput;
  createPostComment: CreatePostCommentOutput;
  createQuestionCard: CreateQuestionCardOutput;
  createQuestionCardCategory: CreateQuestionCardCategoryOutput;
  createQuiz: CreateQuizOutput;
  createQuizComment: CreateQuizCommentOutput;
  createUserRole: CreateUserRoleOutput;
  createVideo: CreateVideoOutput;
  createVisit: CoreOutput;
  createVisitHistory: CreateVisitHistoryOutput;
  deleteAllNoticesOfMe: CoreOutput;
  deleteAttendance: DeleteAttendanceOutput;
  deleteCategoryEvaluation: DeleteCategoryEvaluationOutput;
  deleteExamCategoryBookmark: DeleteExamCategoryBookmarkOutput;
  deleteExamCategoryInvitation: DeleteExamCategoryInvitationOutput;
  deleteExamCategoryViewer: DeleteExamCategoryViewerOutput;
  deleteMockExam: DeleteMockExamOutput;
  deleteMockExamCategory: DeleteMockExamCategoryOutput;
  deleteMockExamQuestion: DeleteMockExamQuestionOutput;
  deleteMockExamQuestionComment: DeleteMockExamQuestionCommentOutput;
  deleteMockExamQuestionFeedback: DeleteMockExamQuestionFeedbackOutput;
  deleteNotice: DeleteNoticeOutput;
  deletePayment: DeletePaymentOutput;
  deletePost: DeletePostOutput;
  deletePostComment: DeletePostCommentOutput;
  deleteQuestionCardCategory: DeleteQuestionCardCategoryOutput;
  deleteQuestionCards: DeleteQuestionCardsOutput;
  deleteQuizComment: DeleteQuizCommentOutput;
  deleteRecentlyStudiedExams: CoreOutput;
  deleteUser: CoreOutput;
  deleteUserRole: DeleteUserRoleOutput;
  editMockExam: EditMockExamOutput;
  editMockExamCategory: DeleteMockExamCategoryOutput;
  editMockExamQuestion: EditMockExamQuestionOutput;
  editMockExamQuestionBookmark: EditMockExamQuestionBookmarkOutput;
  editMockExamQuestionComment: EditMockExamQuestionCommentOutput;
  editMockExamQuestionCommentLike: EditMockExamQuestionCommentLikeOutput;
  editMockExamQuestionFeedback: EditMockExamQuestionFeedbackOutput;
  editNotice: EditNoticeOutput;
  editPost: EditPostOutput;
  editPostComment: EditPostCommentOutput;
  editPostCommentLike: EditPostCommentLikeOutput;
  editPostLike: EditPostLikeOutput;
  editProfile: EditProfileOutput;
  editQuizComment: EditQuizCommentOutput;
  editQuizCommentLike: EditQuizCommentLikeOutput;
  emailVerification: EmailVerificationOutput;
  login: LoginOutput;
  logout: CoreOutput;
  moveExamOrder: MoveExamOrderOutput;
  naverBlogViewMacro: NaverBlogViewMacroOutput;
  register: RegisterOutput;
  removeExamFromCategory: RemoveExamFromCategoryOutput;
  resetMyExamQuestionState: ResetMyExamQuestionStateOutput;
  resetMyQuestionBookmark: CoreOutput;
  restMyAllQuestionStates: CoreOutput;
  restoreUser: CoreOutput;
  revalidate: RevalidateOutput;
  saveExam: SaveExamOutput;
  sendFindPasswordMail: SendFindPasswordMailOutput;
  sendMessageToAlramChannelOfTelegram: SendMessageToAlramChannelOfTelegramOutput;
  sendMessageToTelegram: SendMessageToTelegramOutput;
  sendVerificationMail: SendVerificationMailOutput;
  syncRole: CoreOutput;
  toggleExamBookmark: ToggleExamBookmarkOutput;
  toggleExamCategorieBookmark: ToggleExamCategoryBookmarkOutput;
  updateAdBlockPermission: UpdateAdblockPermissionOutput;
  updateApprovedStateOfMockExamQuestion: UpdateApprovedStateOfMockExamQuestionOutput;
  updateCategoryEvaluation: UpdateCategoryEvaluationOutput;
  updateDiscountCode: UpdateDiscountCodeOutput;
  updateExamOrder: UpdateExamOrderOutput;
  updateExamViewerApproveState: UpdateExamViewerApproveStateOutput;
  updateMockExamQuestionFeedbackRecommendation: UpdateMockExamQuestionFeedbackRecommendationOutput;
  updatePayment: UpdatePaymentOutput;
  updateQuestionCard: UpdateQuestionCardOutput;
  updateQuestionCardCategory: UpdateQuestionCardCategoryOutput;
  updateQuestionStatesToCore: CoreOutput;
  updateRecentlyStudiedCategory: UpdateRecentlyStudiedCategoryOutput;
  upsertRecentlyStudiedExams: UpsertRecentlyStudiedExamsOutput;
  viewPost: ViewPostOutput;
};


export type MutationAcceptExamCategoryInvitationArgs = {
  input: AcceptExamCategoryInvitationInput;
};


export type MutationAddExamToCategoryArgs = {
  input: AddExamToCategoryInput;
};


export type MutationChangeClientRoleArgs = {
  input: ChangeClientRoleInput;
};


export type MutationChangeClientRoleAndCreatePaymentArgs = {
  input: ChangeClientRoleAndCreatePaymentInput;
};


export type MutationChangePasswordAfterVerifyingArgs = {
  input: ChangePasswordAfterVerifyingInput;
};


export type MutationCheckDiscountCodeArgs = {
  input: CheckDiscountCodeInput;
};


export type MutationCheckIfCategoryEvaluatedArgs = {
  input: CheckIfCategoryEvaluatedInput;
};


export type MutationCheckPasswordArgs = {
  input: CheckPasswordInput;
};


export type MutationCheckUserRoleArgs = {
  input: CheckUserRoleInput;
};


export type MutationCreateAttendanceArgs = {
  input: CreateAttendanceInput;
};


export type MutationCreateCategoryEvaluationArgs = {
  input: CreateCategoryEvaluationInput;
};


export type MutationCreateExamCategoryInvitationArgs = {
  input: CreateExamCategoryInvitationInput;
};


export type MutationCreateExamCategoryViewerArgs = {
  input: CreateExamCategoryViewerInput;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationCreateMockExamArgs = {
  input: CreateMockExamInput;
};


export type MutationCreateMockExamCategoryArgs = {
  input: CreateMockExamCategoryInput;
};


export type MutationCreateMockExamHistoryArgs = {
  input: CreateMockExamHistoryInput;
};


export type MutationCreateMockExamQuestionArgs = {
  input: CreateMockExamQuestionInput;
};


export type MutationCreateMockExamQuestionCommentArgs = {
  input: CreateMockExamQuestionCommentInput;
};


export type MutationCreateMockExamQuestionFeedbackArgs = {
  input: CreateMockExamQuestionFeedbackInput;
};


export type MutationCreateMutipleChoiceArgs = {
  input: CreateMockExamQuestionMultipleChoiceInput;
};


export type MutationCreateNoticeArgs = {
  input: CreateNoticeInput;
};


export type MutationCreateOrUpdateMockExamQuestionStateArgs = {
  input: CreateOrUpdateMockExamQuestionStateInput;
};


export type MutationCreateOrUpdateTodoArgs = {
  input: CreateOrUpdateTodoInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreatePostCommentArgs = {
  input: CreatePostCommentInput;
};


export type MutationCreateQuestionCardArgs = {
  input: CreateQuestionCardInput;
};


export type MutationCreateQuestionCardCategoryArgs = {
  input: CreateQuestionCardCategoryInput;
};


export type MutationCreateQuizArgs = {
  input: CreateQuizInput;
};


export type MutationCreateQuizCommentArgs = {
  input: CreateQuizCommentInput;
};


export type MutationCreateUserRoleArgs = {
  input: CreateUserRoleInput;
};


export type MutationCreateVideoArgs = {
  input: CreateVideoInput;
};


export type MutationDeleteAttendanceArgs = {
  input: DeleteAttendanceInput;
};


export type MutationDeleteCategoryEvaluationArgs = {
  input: DeleteCategoryEvaluationInput;
};


export type MutationDeleteExamCategoryBookmarkArgs = {
  input: DeleteExamCategoryBookmarkInput;
};


export type MutationDeleteExamCategoryInvitationArgs = {
  input: DeleteExamCategoryInvitationInput;
};


export type MutationDeleteExamCategoryViewerArgs = {
  input: DeleteExamCategoryViewerInput;
};


export type MutationDeleteMockExamArgs = {
  input: DeleteMockExamInput;
};


export type MutationDeleteMockExamCategoryArgs = {
  input: DeleteMockExamCategoryInput;
};


export type MutationDeleteMockExamQuestionArgs = {
  input: DeleteMockExamQuestionInput;
};


export type MutationDeleteMockExamQuestionCommentArgs = {
  input: DeleteMockExamQuestionCommentInput;
};


export type MutationDeleteMockExamQuestionFeedbackArgs = {
  input: DeleteMockExamQuestionFeedbackInput;
};


export type MutationDeleteNoticeArgs = {
  input: DeleteNoticeInput;
};


export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


export type MutationDeletePostCommentArgs = {
  input: DeletePostCommentInput;
};


export type MutationDeleteQuestionCardCategoryArgs = {
  input: DeleteQuestionCardCategoryInput;
};


export type MutationDeleteQuestionCardsArgs = {
  input: DeleteQuestionCardsInput;
};


export type MutationDeleteQuizCommentArgs = {
  input: DeleteQuizCommentInput;
};


export type MutationDeleteUserRoleArgs = {
  input: DeleteUserRoleInput;
};


export type MutationEditMockExamArgs = {
  input: EditMockExamInput;
};


export type MutationEditMockExamCategoryArgs = {
  input: EditMockExamCategoryInput;
};


export type MutationEditMockExamQuestionArgs = {
  input: EditMockExamQuestionInput;
};


export type MutationEditMockExamQuestionBookmarkArgs = {
  input: EditMockExamQuestionBookmarkInput;
};


export type MutationEditMockExamQuestionCommentArgs = {
  input: EditMockExamQuestionCommentInput;
};


export type MutationEditMockExamQuestionCommentLikeArgs = {
  input: EditMockExamQuestionCommentLikeInput;
};


export type MutationEditMockExamQuestionFeedbackArgs = {
  input: EditMockExamQuestionFeedbackInput;
};


export type MutationEditNoticeArgs = {
  input: EditNoticeInput;
};


export type MutationEditPostArgs = {
  input: EditPostInput;
};


export type MutationEditPostCommentArgs = {
  input: EditPostCommentInput;
};


export type MutationEditPostCommentLikeArgs = {
  input: EditPostCommentLikeInput;
};


export type MutationEditPostLikeArgs = {
  input: EditPostLikeInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationEditQuizCommentArgs = {
  input: EditQuizCommentInput;
};


export type MutationEditQuizCommentLikeArgs = {
  input: EditQuizCommentLikeInput;
};


export type MutationEmailVerificationArgs = {
  input: EmailVerificationInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMoveExamOrderArgs = {
  input: MoveExamOrderInput;
};


export type MutationNaverBlogViewMacroArgs = {
  input: NaverBlogViewMacroInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveExamFromCategoryArgs = {
  input: RemoveExamFromCategoryInput;
};


export type MutationResetMyExamQuestionStateArgs = {
  input: ResetMyExamQuestionStateInput;
};


export type MutationRestoreUserArgs = {
  input: RestoreUserInput;
};


export type MutationRevalidateArgs = {
  input: RevalidateInput;
};


export type MutationSaveExamArgs = {
  input: SaveExamInput;
};


export type MutationSendFindPasswordMailArgs = {
  input: SendFindPasswordMailInput;
};


export type MutationSendMessageToAlramChannelOfTelegramArgs = {
  input: SendMessageToAlramChannelOfTelegramInput;
};


export type MutationSendMessageToTelegramArgs = {
  input: SendMessageToTelegramInput;
};


export type MutationSendVerificationMailArgs = {
  input: SendVerificationMailInput;
};


export type MutationToggleExamBookmarkArgs = {
  input: ToggleExamBookmarkInput;
};


export type MutationToggleExamCategorieBookmarkArgs = {
  input: ToggleExamCategoryBookmarkInput;
};


export type MutationUpdateAdBlockPermissionArgs = {
  input: UpdateAdblockPermissionInput;
};


export type MutationUpdateApprovedStateOfMockExamQuestionArgs = {
  input: UpdateApprovedStateOfMockExamQuestionInput;
};


export type MutationUpdateCategoryEvaluationArgs = {
  input: UpdateCategoryEvaluationInput;
};


export type MutationUpdateDiscountCodeArgs = {
  input: UpdateDiscountCodeInput;
};


export type MutationUpdateExamOrderArgs = {
  input: UpdateExamOrderInput;
};


export type MutationUpdateExamViewerApproveStateArgs = {
  input: UpdateExamViewerApproveStateInput;
};


export type MutationUpdateMockExamQuestionFeedbackRecommendationArgs = {
  input: UpdateMockExamQuestionFeedbackRecommendationInput;
};


export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};


export type MutationUpdateQuestionCardArgs = {
  input: UpdateQuestionCardInput;
};


export type MutationUpdateQuestionCardCategoryArgs = {
  input: UpdateQuestionCardCategoryInput;
};


export type MutationUpdateRecentlyStudiedCategoryArgs = {
  input: UpdateRecentlyStudiedCategoryInput;
};


export type MutationUpsertRecentlyStudiedExamsArgs = {
  input: UpsertRecentlyStudiedExamsInput;
};


export type MutationViewPostArgs = {
  input: ViewPostInput;
};

export type MyRecommedationStatus = {
  __typename?: 'MyRecommedationStatus';
  isBad: Scalars['Boolean']['output'];
  isGood: Scalars['Boolean']['output'];
};

export type MyRecommedationStatusInputType = {
  isBad?: Scalars['Boolean']['input'];
  isGood?: Scalars['Boolean']['input'];
};

export type NaverBlogViewMacroInput = {
  blogUrl?: InputMaybe<Scalars['String']['input']>;
};

export type NaverBlogViewMacroOutput = {
  __typename?: 'NaverBlogViewMacroOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type NaverKeywordSearchCount = {
  __typename?: 'NaverKeywordSearchCount';
  monthlyMobileQcCnt: Scalars['Float']['output'];
  monthlyPcQcCnt: Scalars['Float']['output'];
  relKeyword: Scalars['String']['output'];
};

export type NaverPostInfo = {
  __typename?: 'NaverPostInfo';
  commentCnt: Scalars['Float']['output'];
  isSearchAvailability: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  logNo: Scalars['Float']['output'];
  sympathyCnt: Scalars['Float']['output'];
  thumbnailCount: Scalars['Float']['output'];
  titleWithInspectMessage: Scalars['String']['output'];
};

export type Notice = {
  __typename?: 'Notice';
  confirm: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  link?: Maybe<Scalars['String']['output']>;
  reservationTime?: Maybe<Scalars['DateTime']['output']>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type NoticeInputType = {
  confirm?: Scalars['Boolean']['input'];
  content: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  reservationTime?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserInputType;
};

export type ObjectiveContent = {
  __typename?: 'ObjectiveContent';
  content: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ObjectiveData = {
  __typename?: 'ObjectiveData';
  answer: Scalars['Float']['output'];
  content: Array<ObjectiveContent>;
};

export type PartialMockExamQuestionInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  highScore?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  lowScore?: InputMaybe<Scalars['Float']['input']>;
  middleScore?: InputMaybe<Scalars['Float']['input']>;
  mockExam?: InputMaybe<MockExamInputType>;
  mockExamQuestionBookmark?: InputMaybe<Array<MockExamQuestionBookmarkInputType>>;
  mockExamQuestionComment?: InputMaybe<Array<MockExamQuestionCommentInputType>>;
  mockExamQuestionFeedback?: InputMaybe<Array<MockExamQuestionFeedbackInputType>>;
  multipleChoice?: InputMaybe<Array<MockExamQuestionMultipleChoiceInputType>>;
  myQuestionState?: InputMaybe<QuestionState>;
  number?: InputMaybe<Scalars['Float']['input']>;
  objectiveData?: InputMaybe<MockExamQuestionObjectiveInputType>;
  orderId: Scalars['String']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
  question_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  question_video?: InputMaybe<Array<MockExamQuestionVideoInputType>>;
  quiz?: InputMaybe<Array<QuizInputType>>;
  solution?: InputMaybe<Scalars['String']['input']>;
  solution_img?: InputMaybe<Array<MockExamQuestionImageInputType>>;
  state?: InputMaybe<Array<MockExamQuestionStateInputType>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserInputType>;
};

export type Partner = {
  __typename?: 'Partner';
  created_at: Scalars['DateTime']['output'];
  examCategory: Array<MockExamCategory>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type PartnerInputType = {
  examCategory: Array<MockExamCategoryInputType>;
  name: Scalars['String']['input'];
};

export type PayInputType = {
  orderId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productName: Scalars['String']['input'];
  receiptId: Scalars['String']['input'];
  receiptUrl?: InputMaybe<Scalars['String']['input']>;
  user: UserInputType;
};

export type Payment = {
  __typename?: 'Payment';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  orderId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productName: Scalars['String']['output'];
  receiptId: Scalars['String']['output'];
  receiptUrl?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type Post = {
  __typename?: 'Post';
  category: PostCategory;
  comment: Array<PostComment>;
  commentLikeState: Scalars['Boolean']['output'];
  commentLikesCount: Scalars['Float']['output'];
  commentsCount: Scalars['Float']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  data?: Maybe<PostData>;
  id: Scalars['Float']['output'];
  isHidden: Scalars['Boolean']['output'];
  like: Array<PostLike>;
  likeState: Scalars['Boolean']['output'];
  likesCount: Scalars['Float']['output'];
  priority: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
  view: Scalars['Float']['output'];
};

export enum PostCategory {
  Checkin = 'CHECKIN',
  Data = 'DATA',
  Free = 'FREE',
  Notice = 'NOTICE',
  Recovery = 'RECOVERY',
  Review = 'REVIEW',
  Suggenstion = 'SUGGENSTION'
}

export type PostComment = {
  __typename?: 'PostComment';
  commentLike: Array<PostCommentLike>;
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  likeState: Scalars['Boolean']['output'];
  likesCount: Scalars['Float']['output'];
  post: Post;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type PostCommentInputType = {
  commentLike: Array<PostCommentLikeInputType>;
  content: Scalars['String']['input'];
  likeState?: Scalars['Boolean']['input'];
  likesCount?: Scalars['Float']['input'];
  post: PostInputType;
  user: UserInputType;
};

export type PostCommentLike = {
  __typename?: 'PostCommentLike';
  comment: PostComment;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type PostCommentLikeInputType = {
  comment: PostCommentInputType;
  user: UserInputType;
};

export type PostData = {
  __typename?: 'PostData';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  post: Array<Post>;
  postFile: Array<PostFile>;
  price: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type PostDataInput = {
  fileName?: Scalars['String']['input'];
  filePage?: Scalars['Float']['input'];
  fileUrl?: Scalars['String']['input'];
  price?: Scalars['Float']['input'];
};

export type PostDataInputType = {
  post: Array<PostInputType>;
  postFile: Array<PostFileInputType>;
  price: Scalars['Float']['input'];
  user: UserInputType;
};

export type PostFile = {
  __typename?: 'PostFile';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  page: Scalars['Float']['output'];
  postData: PostData;
  updated_at: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  user: User;
};

export type PostFileInputType = {
  name?: Scalars['String']['input'];
  page?: Scalars['Float']['input'];
  postData: PostDataInputType;
  url?: Scalars['String']['input'];
  user: UserInputType;
};

export type PostInfo = {
  __typename?: 'PostInfo';
  content: Scalars['String']['output'];
  link: Scalars['String']['output'];
  thumb: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PostInputType = {
  category: PostCategory;
  comment: Array<PostCommentInputType>;
  commentLikeState?: Scalars['Boolean']['input'];
  commentLikesCount?: Scalars['Float']['input'];
  commentsCount?: Scalars['Float']['input'];
  content: Scalars['String']['input'];
  data?: InputMaybe<PostDataInputType>;
  isHidden?: Scalars['Boolean']['input'];
  like: Array<PostLikeInputType>;
  likeState?: Scalars['Boolean']['input'];
  likesCount?: Scalars['Float']['input'];
  priority?: Scalars['Float']['input'];
  title: Scalars['String']['input'];
  user: UserInputType;
  view?: Scalars['Float']['input'];
};

export type PostLike = {
  __typename?: 'PostLike';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  post: Post;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type PostLikeInputType = {
  post: PostInputType;
  user: UserInputType;
};

/** Order by criteria for posts */
export enum PostOrderType {
  CreatedAt = 'createdAt',
  Like = 'like'
}

export type Query = {
  __typename?: 'Query';
  findMyExamHistory: FindMyExamHistoryOutput;
  getBlogCategoryList: GetBlogCategoryListOutput;
  getBlogInfo: GetBlogInfoOutput;
  getBuyers: GetBuyersOutput;
  getCategoryEvaluation: GetCategoryEvaluationOutput;
  getExamCategories: GetExamCategoriesOutput;
  getExamCategoryInvitations: GetExamCategoryInvitationsOutput;
  getExamCategoryLearningProgress: GetExamCategoryLearningProgressOutput;
  getExamCategorySubscribers: GetExamCategorySubscribersOutput;
  getExamCategoryViewers: GetExamCategoryViewrsOutput;
  getExamTitleWithFeedback: GetExamTitleWithFeedbackOutput;
  getFeedbacksByRecommendationCount: GetFeedbacksByRecommendationCountOutput;
  getFeedbacksWithFilter: GetFeedbacksWithFilterOutput;
  getInvitedExams: GetInvitedExamsOutput;
  getKeywordSearchCount: GetKeywordSearchCountOutput;
  getMyAllExamCategoriesLearningProgress: GetMyAllExamCategoriesLearningProgressOutput;
  getMyBlogPostRank: GetMyBlogPostRankOutput;
  getMyBookmarkedExamCategories: GetMyBookmarkedExamCategoriesOutput;
  getMyBookmarkedExams: GetMyBookmarkedExamsOutput;
  getMyExamCategories: GetMyExamCategoriesOutput;
  getMyExams: GetMyExamsOutput;
  getMyPayments: GetMyPaymentsOutput;
  getPartners: GetPartnersOutput;
  getQuizs: GetQuizsOutput;
  getRoleCount: GetRoleCountOutput;
  getRolesCount: GetRolesCountOutput;
  getSearchAvailability: GetSearchAvailabilityOutput;
  getSearchRank: GetSearchRankOutput;
  getTodayAttendance: GetTodayAttendanceOutput;
  getTodo: GetTodoOutput;
  getUserByNicknameOrEmail: GetUserByNicknameOrEmailOutput;
  me: MeOutput;
  readAllMockExam: ReadAllMockExamsOutput;
  readAllMockExamCategories: ReadAllMockExamCategoriesOutput;
  readAllMockExamQuestion: ReadAllMockExamQuestionOutput;
  readAllMockExamQuestionFeedback: ReadAllMockExamQuestionFeedbackOutput;
  readAllQuestions: ReadAllQuestionsOutput;
  readExamTitleAndIdByQuestionComment: ReadExamTitleAndIdByQuestionCommentOutput;
  readExamTitleAndIdByQuestionState: ReadExamTitleAndIdByQuestionStateOutput;
  readExamTitleAndIdOfBookmarkedQuestion: ReadExamTitleAndIdOfBookmarkedQuestionOutput;
  readMockExam: ReadMockExamOutput;
  readMockExamCategories: ReadMockExamCategoriesOutput;
  readMockExamCategoryByCategoryId: ReadMockExamCategoryByCategoryIdOutput;
  readMockExamCategoryByExamId: ReadMockExamCategoryByExamIdOutput;
  readMockExamCategoryIds: ReadMockExamCategoryIdsOutput;
  readMockExamCategoryNames: ReadMockExamCategoryNamesOutput;
  readMockExamQuestion: ReadMockExamQuestionOutput;
  readMockExamQuestionBookmark: ReadMockExamQuestionBookmarkOutput;
  readMockExamQuestionCommentLikesByQuestinId: ReadMockExamQuestionCommentLikesByQuestinIdOutput;
  readMockExamQuestionCommentsByQuestionId: ReadMockExamQuestionCommentsByQuestionIdOutput;
  readMockExamQuestionNumbers: ReadMockExamQuestionNumbersOutput;
  readMockExamQuestionsByMockExamId: ReadMockExamQuestionsByMockExamIdOutput;
  readMockExamQuestionsByState: ReadMockExamQuestionsByStateOutput;
  readMockExamTitlesByCateory: ReadMockExamTitlesByCateoryOutput;
  readMyExamHistory: ReadMyExamHistoryOutput;
  readMyExamQuestionState: ReadMyExamQuestionStateOutput;
  readMyMockExamCategories: ReadMyMockExamCategoriesOutput;
  readMyQuestionCardCategories: ReadMyQuestionCardCategoriesOutput;
  readMyQuestionCards: ReadMyQuestionCardsOutput;
  readMyQuestionComments: ReadMyQuestionCommentsOutput;
  readPost: ReadPostOutput;
  readPosts: ReadPostsOutput;
  readQuestionCard: ReadQuestionCardOutput;
  readQuestionsByExamIds: ReadQuestionsByExamIdsOutput;
  readVisitCount: ReadVisitCountOutput;
  readVisitHistory: ReadVisitHistoryOutput;
  searchMockExam: SearchMockExamOutput;
  searchMockExamCategories: SearchMockExamCategoriesOutput;
  searchQuestionsByKeyword: SearchQuestionsByKeywordOutput;
  searchUser: SearchUserOutput;
  sync: CoreOutput;
  syncPrice: CoreOutput;
  test: Array<Scalars['String']['output']>;
  userProfile: UserProfileOutput;
};


export type QueryFindMyExamHistoryArgs = {
  input: FindMyExamHistoryInput;
};


export type QueryGetBlogCategoryListArgs = {
  input: GetBlogCategoryListInput;
};


export type QueryGetBlogInfoArgs = {
  input: GetBlogInfoInput;
};


export type QueryGetCategoryEvaluationArgs = {
  input: GetCategoryEvaluationInput;
};


export type QueryGetExamCategoriesArgs = {
  input: GetExamCategoriesInput;
};


export type QueryGetExamCategoryLearningProgressArgs = {
  input: GetExamCategoryLearningProgressInput;
};


export type QueryGetExamCategorySubscribersArgs = {
  input: GetExamCategorySubscribersInput;
};


export type QueryGetExamCategoryViewersArgs = {
  input: GetExamCategoryViewrsInput;
};


export type QueryGetFeedbacksByRecommendationCountArgs = {
  input: GetFeedbacksByRecommendationCountInput;
};


export type QueryGetFeedbacksWithFilterArgs = {
  input: GetFeedbacksWithFilterInput;
};


export type QueryGetKeywordSearchCountArgs = {
  input: GetKeywordSearchCountInput;
};


export type QueryGetMyBlogPostRankArgs = {
  input: GetMyBlogPostRankInput;
};


export type QueryGetMyExamsArgs = {
  input: GetMyExamsInput;
};


export type QueryGetQuizsArgs = {
  input: GetQuizsInput;
};


export type QueryGetRoleCountArgs = {
  input: GetRoleCountInput;
};


export type QueryGetRolesCountArgs = {
  input: GetRolesCountInput;
};


export type QueryGetSearchAvailabilityArgs = {
  input: GetSearchAvailabilityInput;
};


export type QueryGetSearchRankArgs = {
  input: GetSearchRankInput;
};


export type QueryGetTodoArgs = {
  input: GetTodoInput;
};


export type QueryGetUserByNicknameOrEmailArgs = {
  input: GetUserByNicknameOrEmailInput;
};


export type QueryReadAllMockExamArgs = {
  input: ReadAllMockExamsInput;
};


export type QueryReadAllMockExamCategoriesArgs = {
  input?: InputMaybe<ReadAllMockExamCategoriesInput>;
};


export type QueryReadAllQuestionsArgs = {
  input: ReadAllQuestionsInput;
};


export type QueryReadMockExamArgs = {
  input: ReadMockExamInput;
};


export type QueryReadMockExamCategoriesArgs = {
  input: ReadMockExamCategoriesInput;
};


export type QueryReadMockExamCategoryByCategoryIdArgs = {
  input: ReadMockExamCategoryByCategoryIdInput;
};


export type QueryReadMockExamCategoryByExamIdArgs = {
  input: ReadMockExamCategoryByExamIdInput;
};


export type QueryReadMockExamQuestionArgs = {
  input: ReadMockExamQuestionInput;
};


export type QueryReadMockExamQuestionBookmarkArgs = {
  input: ReadMockExamQuestionBookmarkInput;
};


export type QueryReadMockExamQuestionCommentLikesByQuestinIdArgs = {
  input: ReadMockExamQuestionCommentLikesByQuestinIdInput;
};


export type QueryReadMockExamQuestionCommentsByQuestionIdArgs = {
  input: ReadMockExamQuestionCommentsByQuestionIdInput;
};


export type QueryReadMockExamQuestionNumbersArgs = {
  input: ReadMockExamQuestionNumbersInput;
};


export type QueryReadMockExamQuestionsByMockExamIdArgs = {
  input: ReadMockExamQuestionsByMockExamIdInput;
};


export type QueryReadMockExamQuestionsByStateArgs = {
  input: ReadMockExamQuestionsByStateInput;
};


export type QueryReadMockExamTitlesByCateoryArgs = {
  input: ReadMockExamTitlesByCateoryInput;
};


export type QueryReadMyExamQuestionStateArgs = {
  input: ReadMyExamQuestionStateInput;
};


export type QueryReadMyMockExamCategoriesArgs = {
  input?: InputMaybe<ReadMyMockExamCategoriesInput>;
};


export type QueryReadMyQuestionCardsArgs = {
  input: ReadMyQuestionCardsInput;
};


export type QueryReadMyQuestionCommentsArgs = {
  input: ReadMyQuestionCommentsInput;
};


export type QueryReadPostArgs = {
  input: ReadPostInput;
};


export type QueryReadPostsArgs = {
  input: ReadPostsInput;
};


export type QueryReadQuestionCardArgs = {
  input: ReadQuestionCardInput;
};


export type QueryReadQuestionsByExamIdsArgs = {
  input: ReadQuestionsByExamIdsInput;
};


export type QuerySearchMockExamArgs = {
  input: SearchMockExamInput;
};


export type QuerySearchMockExamCategoriesArgs = {
  input: SearchMockExamCategoriesInput;
};


export type QuerySearchQuestionsByKeywordArgs = {
  input: SearchQuestionsByKeywordInput;
};


export type QuerySearchUserArgs = {
  input: SearchUserInput;
};


export type QueryUserProfileArgs = {
  input: UserProfileInput;
};

export type QuestionCard = {
  __typename?: 'QuestionCard';
  category?: Maybe<QuestionCardCategory>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  question: Scalars['String']['output'];
  solution: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type QuestionCardCategory = {
  __typename?: 'QuestionCardCategory';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  questionCard: QuestionCard;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type QuestionCardCategoryInputType = {
  name: Scalars['String']['input'];
  questionCard: QuestionCardInputType;
  user: UserInputType;
};

export type QuestionCardInputType = {
  category?: InputMaybe<QuestionCardCategoryInputType>;
  question: Scalars['String']['input'];
  solution: Scalars['String']['input'];
  user: UserInputType;
};

export enum QuestionFeedbackRecommendationType {
  Bad = 'BAD',
  Good = 'GOOD'
}

export enum QuestionFeedbackType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Report = 'REPORT'
}

export type QuestionNumber = {
  __typename?: 'QuestionNumber';
  questionId: Scalars['Float']['output'];
  questionNumber: Scalars['Float']['output'];
};

export enum QuestionState {
  Core = 'CORE',
  High = 'HIGH',
  Middle = 'MIDDLE',
  Row = 'ROW'
}

export type Quiz = {
  __typename?: 'Quiz';
  category: MockExamCategory;
  comment: Array<QuizComment>;
  created_at: Scalars['DateTime']['output'];
  date: Scalars['String']['output'];
  exam: MockExam;
  id: Scalars['Float']['output'];
  question: MockExamQuestion;
  updated_at: Scalars['DateTime']['output'];
};

export type QuizComment = {
  __typename?: 'QuizComment';
  commentLike: Array<QuizCommentLike>;
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  likeState: Scalars['Boolean']['output'];
  likesCount: Scalars['Float']['output'];
  quiz: Quiz;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type QuizCommentInputType = {
  commentLike: Array<QuizCommentLikeInputType>;
  content: Scalars['String']['input'];
  likeState?: Scalars['Boolean']['input'];
  likesCount?: Scalars['Float']['input'];
  quiz: QuizInputType;
  user: UserInputType;
};

export type QuizCommentLike = {
  __typename?: 'QuizCommentLike';
  comment: QuizComment;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type QuizCommentLikeInputType = {
  comment: QuizCommentInputType;
  user: UserInputType;
};

export type QuizInputType = {
  category: MockExamCategoryInputType;
  comment: Array<QuizCommentInputType>;
  date: Scalars['String']['input'];
  exam: MockExamInputType;
  question: MockExamQuestionInputType;
};

export type ReadAllMockExamCategoriesInput = {
  examType?: InputMaybe<ExamType>;
  partnerId?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<ExamSource>;
};

export type ReadAllMockExamCategoriesOutput = {
  __typename?: 'ReadAllMockExamCategoriesOutput';
  categories: Array<MockExamCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadAllMockExamQuestionFeedbackOutput = {
  __typename?: 'ReadAllMockExamQuestionFeedbackOutput';
  error?: Maybe<Scalars['String']['output']>;
  feedbacks: Array<MockExamQuestionFeedback>;
  ok: Scalars['Boolean']['output'];
};

export type ReadAllMockExamQuestionOutput = {
  __typename?: 'ReadAllMockExamQuestionOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExamQuestions: Array<MockExamQuestion>;
  ok: Scalars['Boolean']['output'];
};

export type ReadAllMockExamsInput = {
  all?: Scalars['Boolean']['input'];
  category?: Scalars['String']['input'];
  query?: Scalars['String']['input'];
};

export type ReadAllMockExamsOutput = {
  __typename?: 'ReadAllMockExamsOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExams: Array<MockExam>;
  ok: Scalars['Boolean']['output'];
};

export type ReadAllQuestionsInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};

export type ReadAllQuestionsOutput = {
  __typename?: 'ReadAllQuestionsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questions?: Maybe<Array<MockExamQuestion>>;
};

export type ReadExamTitleAndIdByQuestionCommentOutput = {
  __typename?: 'ReadExamTitleAndIdByQuestionCommentOutput';
  error?: Maybe<Scalars['String']['output']>;
  examTitleAndId?: Maybe<Array<ExamTitleAndIdByQuestionComment>>;
  ok: Scalars['Boolean']['output'];
};

export type ReadExamTitleAndIdByQuestionStateOutput = {
  __typename?: 'ReadExamTitleAndIdByQuestionStateOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  titleAndId?: Maybe<Array<TitleAndId>>;
};

export type ReadExamTitleAndIdOfBookmarkedQuestionOutput = {
  __typename?: 'ReadExamTitleAndIdOfBookmarkedQuestionOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  titleAndId?: Maybe<Array<TitleAndId>>;
};

export type ReadMockExamCategoriesInput = {
  source?: ExamSource;
};

export type ReadMockExamCategoriesOutput = {
  __typename?: 'ReadMockExamCategoriesOutput';
  categories: Array<MockExamCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamCategoryByCategoryIdInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ReadMockExamCategoryByCategoryIdOutput = {
  __typename?: 'ReadMockExamCategoryByCategoryIdOutput';
  category?: Maybe<MockExamCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamCategoryByExamIdInput = {
  examId: Scalars['Float']['input'];
};

export type ReadMockExamCategoryByExamIdOutput = {
  __typename?: 'ReadMockExamCategoryByExamIdOutput';
  category?: Maybe<MockExamCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamCategoryIdsOutput = {
  __typename?: 'ReadMockExamCategoryIdsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ids?: Maybe<Array<Scalars['Float']['output']>>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamCategoryNamesOutput = {
  __typename?: 'ReadMockExamCategoryNamesOutput';
  error?: Maybe<Scalars['String']['output']>;
  names?: Maybe<Array<Scalars['String']['output']>>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamInput = {
  id: Scalars['Float']['input'];
};

export type ReadMockExamOutput = {
  __typename?: 'ReadMockExamOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExam: MockExam;
  ok: Scalars['Boolean']['output'];
  questionNumbers: Array<Scalars['Float']['output']>;
};

export type ReadMockExamQuestionBookmarkInput = {
  examId: Scalars['Float']['input'];
};

export type ReadMockExamQuestionBookmarkOutput = {
  __typename?: 'ReadMockExamQuestionBookmarkOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questions: Array<MockExamQuestion>;
};

export type ReadMockExamQuestionCommentLikesByQuestinIdInput = {
  commentId: Scalars['Float']['input'];
};

export type ReadMockExamQuestionCommentLikesByQuestinIdOutput = {
  __typename?: 'ReadMockExamQuestionCommentLikesByQuestinIdOutput';
  count: Scalars['Float']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamQuestionCommentsByQuestionIdInput = {
  questionId: Scalars['Float']['input'];
};

export type ReadMockExamQuestionCommentsByQuestionIdOutput = {
  __typename?: 'ReadMockExamQuestionCommentsByQuestionIdOutput';
  comments?: Maybe<Array<MockExamQuestionComment>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamQuestionInput = {
  examId?: InputMaybe<Scalars['Float']['input']>;
  questionId: Scalars['Float']['input'];
};

export type ReadMockExamQuestionNumbersInput = {
  mockExamId: Scalars['Float']['input'];
};

export type ReadMockExamQuestionNumbersOutput = {
  __typename?: 'ReadMockExamQuestionNumbersOutput';
  error?: Maybe<Scalars['String']['output']>;
  examStatus?: Maybe<ExamStatus>;
  ok: Scalars['Boolean']['output'];
  questionNumbers: Array<QuestionNumber>;
};

export type ReadMockExamQuestionOutput = {
  __typename?: 'ReadMockExamQuestionOutput';
  error?: Maybe<Scalars['String']['output']>;
  isCoAuthor: Scalars['Boolean']['output'];
  mockExamQusetion: MockExamQuestion;
  ok: Scalars['Boolean']['output'];
  state?: Maybe<QuestionState>;
};

export type ReadMockExamQuestionsByMockExamIdInput = {
  bookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  ids?: InputMaybe<Array<Scalars['Float']['input']>>;
  isRandom?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  states?: InputMaybe<Array<QuestionState>>;
};

export type ReadMockExamQuestionsByMockExamIdOutput = {
  __typename?: 'ReadMockExamQuestionsByMockExamIdOutput';
  author: Scalars['String']['output'];
  count: Scalars['Float']['output'];
  error?: Maybe<Scalars['String']['output']>;
  isPremium: Scalars['Boolean']['output'];
  ok: Scalars['Boolean']['output'];
  questions: Array<MockExamQuestion>;
  title: Scalars['String']['output'];
};

export type ReadMockExamQuestionsByStateInput = {
  examId?: InputMaybe<Scalars['Float']['input']>;
  questionIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  states: Array<QuestionState>;
};

export type ReadMockExamQuestionsByStateOutput = {
  __typename?: 'ReadMockExamQuestionsByStateOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExamQusetions: Array<MockExamQuestionState>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMockExamTitlesByCateoryInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<ExamSource>;
};

export type ReadMockExamTitlesByCateoryOutput = {
  __typename?: 'ReadMockExamTitlesByCateoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  titles: Array<ExamTitleAndId>;
};

export type ReadMyExamHistoryOutput = {
  __typename?: 'ReadMyExamHistoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExams?: Maybe<Array<MockExam>>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMyExamQuestionStateInput = {
  questionId: Scalars['Float']['input'];
};

export type ReadMyExamQuestionStateOutput = {
  __typename?: 'ReadMyExamQuestionStateOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  state: MockExamQuestionState;
};

export type ReadMyMockExamCategoriesInput = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ReadMyMockExamCategoriesOutput = {
  __typename?: 'ReadMyMockExamCategoriesOutput';
  categories: Array<MockExamCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMyQuestionCardCategoriesOutput = {
  __typename?: 'ReadMyQuestionCardCategoriesOutput';
  categories?: Maybe<Array<QuestionCardCategory>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadMyQuestionCardsInput = {
  categoryId?: InputMaybe<Scalars['Float']['input']>;
};

export type ReadMyQuestionCardsOutput = {
  __typename?: 'ReadMyQuestionCardsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questionCards?: Maybe<Array<QuestionCard>>;
};

export type ReadMyQuestionCommentsInput = {
  examId: Scalars['Float']['input'];
};

export type ReadMyQuestionCommentsOutput = {
  __typename?: 'ReadMyQuestionCommentsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questions?: Maybe<Array<MockExamQuestion>>;
};

export type ReadPostInput = {
  id: Scalars['Float']['input'];
};

export type ReadPostOutput = {
  __typename?: 'ReadPostOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  post?: Maybe<Post>;
};

export type ReadPostsInput = {
  all?: Scalars['Boolean']['input'];
  category?: InputMaybe<PostCategory>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: PostOrderType;
  page: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReadPostsOutput = {
  __typename?: 'ReadPostsOutput';
  count: Scalars['Float']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  posts?: Maybe<Array<Post>>;
};

export type ReadQuestionCardInput = {
  id: Scalars['Float']['input'];
};

export type ReadQuestionCardOutput = {
  __typename?: 'ReadQuestionCardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questionCard?: Maybe<QuestionCard>;
};

export type ReadQuestionsByExamIdsInput = {
  bookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['Float']['input']>>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: Scalars['String']['input'];
  states?: InputMaybe<Array<QuestionState>>;
};

export type ReadQuestionsByExamIdsOutput = {
  __typename?: 'ReadQuestionsByExamIdsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questions: Array<MockExamQuestion>;
};

export type ReadVisitCountOutput = {
  __typename?: 'ReadVisitCountOutput';
  count?: Maybe<Scalars['Float']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ReadVisitHistoryOutput = {
  __typename?: 'ReadVisitHistoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  today?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  yesterday?: Maybe<Scalars['Float']['output']>;
};

export type RecentlyStudiedExams = {
  __typename?: 'RecentlyStudiedExams';
  categoryId: Scalars['Float']['output'];
  examIds: Array<Scalars['Float']['output']>;
  questionIndex: Scalars['Float']['output'];
};

export type RecentlyStudiedExamsInputType = {
  categoryId: Scalars['Float']['input'];
  examIds: Array<Scalars['Float']['input']>;
  questionIndex: Scalars['Float']['input'];
};

export type RecommendationCount = {
  __typename?: 'RecommendationCount';
  bad: Scalars['Float']['output'];
  good: Scalars['Float']['output'];
};

export type RecommendationCountInputType = {
  bad?: Scalars['Float']['input'];
  good?: Scalars['Float']['input'];
};

export type RegisterInput = {
  code: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type RemoveExamFromCategoryInput = {
  categoryId: Scalars['Float']['input'];
  examId: Scalars['Float']['input'];
};

export type RemoveExamFromCategoryOutput = {
  __typename?: 'RemoveExamFromCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ResetMyExamQuestionStateInput = {
  examId?: InputMaybe<Scalars['Float']['input']>;
  questionIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type ResetMyExamQuestionStateOutput = {
  __typename?: 'ResetMyExamQuestionStateOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type RestoreUserInput = {
  id: Scalars['Float']['input'];
};

export type RevalidateInput = {
  path: Scalars['String']['input'];
};

export type RevalidateOutput = {
  __typename?: 'RevalidateOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Role = {
  __typename?: 'Role';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  mockExamCategories: Array<MockExamCategory>;
  name: Scalars['String']['output'];
  seller?: Maybe<Seller>;
  updated_at: Scalars['DateTime']['output'];
  userRoles: Array<UserAndRole>;
};

export type RoleInputType = {
  mockExamCategories: Array<MockExamCategoryInputType>;
  name: Scalars['String']['input'];
  seller?: InputMaybe<SellerInputType>;
  userRoles: Array<UserRoleInputType>;
};

export type SaveExamInput = {
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  questionOrderIds: Array<Scalars['String']['input']>;
  questions?: InputMaybe<Array<PartialMockExamQuestionInput>>;
  title: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};

export type SaveExamOutput = {
  __typename?: 'SaveExamOutput';
  error?: Maybe<Scalars['String']['output']>;
  examId?: Maybe<Scalars['Float']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type SearchCount = {
  __typename?: 'SearchCount';
  all: Scalars['Float']['output'];
  blog: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type SearchCounts = {
  __typename?: 'SearchCounts';
  daum: SearchCount;
  naver: SearchCount;
};

export type SearchMockExamCategoriesInput = {
  isPublic: Scalars['Boolean']['input'];
  keyword: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};

export type SearchMockExamCategoriesOutput = {
  __typename?: 'SearchMockExamCategoriesOutput';
  categories?: Maybe<Array<MockExamCategory>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Float']['output']>;
};

export type SearchMockExamInput = {
  query: Scalars['String']['input'];
};

export type SearchMockExamOutput = {
  __typename?: 'SearchMockExamOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExams: Array<MockExam>;
  ok: Scalars['Boolean']['output'];
  totalResults: Scalars['Float']['output'];
};

export type SearchQuestionsByKeywordInput = {
  examIds?: Array<Scalars['Float']['input']>;
  keyword: Scalars['String']['input'];
};

export type SearchQuestionsByKeywordOutput = {
  __typename?: 'SearchQuestionsByKeywordOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questions?: Maybe<Array<MockExamQuestion>>;
};

export type SearchUserInput = {
  name: Scalars['String']['input'];
};

export type SearchUserOutput = {
  __typename?: 'SearchUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  users?: Maybe<Array<User>>;
};

export type Seller = {
  __typename?: 'Seller';
  created_at: Scalars['DateTime']['output'];
  examCategories: Array<MockExamCategory>;
  id: Scalars['Float']['output'];
  roles: Array<Role>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type SellerInputType = {
  examCategories: Array<MockExamCategoryInputType>;
  roles: Array<RoleInputType>;
  user: UserInputType;
};

export type SendFindPasswordMailInput = {
  email: Scalars['String']['input'];
};

export type SendFindPasswordMailOutput = {
  __typename?: 'SendFindPasswordMailOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type SendMessageToAlramChannelOfTelegramInput = {
  message: Scalars['String']['input'];
};

export type SendMessageToAlramChannelOfTelegramOutput = {
  __typename?: 'SendMessageToAlramChannelOfTelegramOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type SendVerificationMailInput = {
  email: Scalars['String']['input'];
};

export type SendVerificationMailOutput = {
  __typename?: 'SendVerificationMailOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type TitleAndId = {
  __typename?: 'TitleAndId';
  id?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Todo = {
  __typename?: 'Todo';
  created_at: Scalars['DateTime']['output'];
  dateString: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  todoList: Array<TodoList>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type TodoInputType = {
  dateString: Scalars['String']['input'];
  todoList?: Array<TodoListInputType>;
  user: UserInputType;
};

export type TodoList = {
  __typename?: 'TodoList';
  isDone: Scalars['Boolean']['output'];
  todo: Scalars['String']['output'];
};

export type TodoListInputType = {
  isDone: Scalars['Boolean']['input'];
  todo: Scalars['String']['input'];
};

export type ToggleExamBookmarkInput = {
  examId: Scalars['Float']['input'];
};

export type ToggleExamBookmarkOutput = {
  __typename?: 'ToggleExamBookmarkOutput';
  error?: Maybe<Scalars['String']['output']>;
  isBookmarked?: Maybe<Scalars['Boolean']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ToggleExamCategoryBookmarkInput = {
  categoryId: Scalars['Float']['input'];
};

export type ToggleExamCategoryBookmarkOutput = {
  __typename?: 'ToggleExamCategoryBookmarkOutput';
  error?: Maybe<Scalars['String']['output']>;
  isBookmarked?: Maybe<Scalars['Boolean']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateAdblockPermissionInput = {
  userId: Scalars['Float']['input'];
};

export type UpdateAdblockPermissionOutput = {
  __typename?: 'UpdateAdblockPermissionOutput';
  adblockPermission?: Maybe<Scalars['Boolean']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateApprovedStateOfMockExamQuestionInput = {
  questionId: Scalars['Float']['input'];
};

export type UpdateApprovedStateOfMockExamQuestionOutput = {
  __typename?: 'UpdateApprovedStateOfMockExamQuestionOutput';
  currentApprovedState: Scalars['Boolean']['output'];
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questionId: Scalars['Float']['output'];
};

export type UpdateCategoryEvaluationInput = {
  feedback?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  isSecret?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCategoryEvaluationOutput = {
  __typename?: 'UpdateCategoryEvaluationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateDiscountCodeInput = {
  code: Scalars['String']['input'];
  status: DiscountCodeStatus;
};

export type UpdateDiscountCodeOutput = {
  __typename?: 'UpdateDiscountCodeOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateExamOrderInput = {
  examOrders: Array<ExamOrder>;
};

export type UpdateExamOrderOutput = {
  __typename?: 'UpdateExamOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  mockExams?: Maybe<Array<MockExam>>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateExamViewerApproveStateInput = {
  examViewerId: Scalars['Float']['input'];
};

export type UpdateExamViewerApproveStateOutput = {
  __typename?: 'UpdateExamViewerApproveStateOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateMockExamQuestionFeedbackRecommendationInput = {
  feedbackId: Scalars['Float']['input'];
  type: QuestionFeedbackRecommendationType;
};

export type UpdateMockExamQuestionFeedbackRecommendationOutput = {
  __typename?: 'UpdateMockExamQuestionFeedbackRecommendationOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  recommendation?: Maybe<MockExamQuestionFeedbackRecommendation>;
};

export type UpdatePaymentInput = {
  paymentId: Scalars['Float']['input'];
  receiptId: Scalars['String']['input'];
};

export type UpdatePaymentOutput = {
  __typename?: 'UpdatePaymentOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateQuestionCardCategoryInput = {
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UpdateQuestionCardCategoryOutput = {
  __typename?: 'UpdateQuestionCardCategoryOutput';
  category?: Maybe<QuestionCardCategory>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateQuestionCardInput = {
  question?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['Float']['input'];
  solution?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuestionCardOutput = {
  __typename?: 'UpdateQuestionCardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  questionCard?: Maybe<QuestionCard>;
};

export type UpdateRecentlyStudiedCategoryInput = {
  categoryName: Scalars['String']['input'];
};

export type UpdateRecentlyStudiedCategoryOutput = {
  __typename?: 'UpdateRecentlyStudiedCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpsertRecentlyStudiedExamsInput = {
  categoryId: Scalars['Float']['input'];
  examIds: Array<Scalars['Float']['input']>;
  questionIndex: Scalars['Float']['input'];
};

export type UpsertRecentlyStudiedExamsOutput = {
  __typename?: 'UpsertRecentlyStudiedExamsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  LoginType: LoginType;
  attendances?: Maybe<Array<Attendance>>;
  categoryEvaluations: Array<CategoryEvaluation>;
  created_at: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  discountCode?: Maybe<Array<DiscountCode>>;
  email: Scalars['String']['output'];
  examBookmarks: Array<MockExamBookmark>;
  examCategoryBookmarks: Array<ExamCategoryBookmark>;
  examCategoryInvitations: Array<ExamCategoryInvitation>;
  examCoAuthor?: Maybe<Array<ExamCoAuthor>>;
  examLikes: Array<ExamLike>;
  examViewer?: Maybe<Array<ExamViewer>>;
  feedback: Array<Feedback>;
  feedbackRecommendation: Array<MockExamQuestionFeedbackRecommendation>;
  hasBookmarkedBefore?: Maybe<Scalars['Boolean']['output']>;
  hasReachedPaymentReminder?: Maybe<Scalars['Boolean']['output']>;
  hasSolvedBefore?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Float']['output'];
  isAllowAdblock: Scalars['Boolean']['output'];
  lastLogInIp: Scalars['String']['output'];
  mockExam: Array<MockExam>;
  mockExamCategory: Array<MockExamCategory>;
  mockExamHistory: Array<MockExamHistory>;
  mockExamQuestion: Array<MockExamQuestion>;
  mockExamQuestionBookmark: Array<MockExamQuestionBookmark>;
  mockExamQuestionComment: Array<MockExamQuestionComment>;
  mockExamQuestionCommentLike: Array<MockExamQuestionCommentLike>;
  mockExamQuestionState: Array<MockExamQuestionState>;
  nickname: Scalars['String']['output'];
  notice?: Maybe<Array<Notice>>;
  password: Scalars['String']['output'];
  payments: Array<Payment>;
  post?: Maybe<Array<Post>>;
  postComment: Array<PostComment>;
  postData: Array<PostData>;
  postFile: Array<PostFile>;
  printLimit?: Maybe<Scalars['Float']['output']>;
  profileImg: Scalars['String']['output'];
  questionCardCategorys: Array<QuestionCardCategory>;
  questionCards: Array<QuestionCard>;
  questionFeedback: Array<MockExamQuestionFeedback>;
  quizComment: Array<QuizComment>;
  quizCommentLike: Array<QuizCommentLike>;
  randomExamLimit?: Maybe<Scalars['Float']['output']>;
  recentlyStudiedCategory: Scalars['String']['output'];
  recentlyStudiedExams?: Maybe<Array<RecentlyStudiedExams>>;
  role: UserRole;
  seller?: Maybe<Seller>;
  solveLimit?: Maybe<Scalars['Float']['output']>;
  solvedProblemCount?: Maybe<Scalars['Float']['output']>;
  todos: Array<Todo>;
  updated_at: Scalars['DateTime']['output'];
  usedFreeTrial: Scalars['Boolean']['output'];
  userRoles: Array<UserAndRole>;
  visit: Array<Visit>;
};

export type UserAndRole = {
  __typename?: 'UserAndRole';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  role: Role;
  updated_at: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type UserInputType = {
  LoginType: LoginType;
  attendances?: InputMaybe<Array<AttendanceInputTyper>>;
  categoryEvaluations: Array<CategoryEvaluationInputType>;
  deletedAt: Scalars['DateTime']['input'];
  discountCode?: InputMaybe<Array<Discountcode>>;
  email: Scalars['String']['input'];
  examBookmarks: Array<MockExamBookmarkInputType>;
  examCategoryBookmarks: Array<ExamCategoryBookmarkInputType>;
  examCategoryInvitations: Array<ExamCategoryInvitationInputType>;
  examCoAuthor?: InputMaybe<Array<ExamCoAuthorInputType>>;
  examLikes: Array<ExamLikeInputType>;
  examViewer?: InputMaybe<Array<ExamViewerInput>>;
  feedback: Array<FeedbackInputType>;
  feedbackRecommendation: Array<MockExamQuestionFeedbackRecommendationInputType>;
  hasBookmarkedBefore?: InputMaybe<Scalars['Boolean']['input']>;
  hasReachedPaymentReminder?: InputMaybe<Scalars['Boolean']['input']>;
  hasSolvedBefore?: InputMaybe<Scalars['Boolean']['input']>;
  isAllowAdblock: Scalars['Boolean']['input'];
  lastLogInIp?: Scalars['String']['input'];
  mockExam: Array<MockExamInputType>;
  mockExamCategory: Array<MockExamCategoryInputType>;
  mockExamHistory: Array<MockExamHistoryInputType>;
  mockExamQuestion: Array<MockExamQuestionInputType>;
  mockExamQuestionBookmark: Array<MockExamQuestionBookmarkInputType>;
  mockExamQuestionComment: Array<MockExamQuestionCommentInputType>;
  mockExamQuestionCommentLike: Array<MockExamQuestionCommentLikeInputType>;
  mockExamQuestionState: Array<MockExamQuestionStateInputType>;
  nickname: Scalars['String']['input'];
  notice?: InputMaybe<Array<NoticeInputType>>;
  password: Scalars['String']['input'];
  payments: Array<PayInputType>;
  post?: InputMaybe<Array<PostInputType>>;
  postComment: Array<PostCommentInputType>;
  postData: Array<PostDataInputType>;
  postFile: Array<PostFileInputType>;
  printLimit?: InputMaybe<Scalars['Float']['input']>;
  profileImg?: Scalars['String']['input'];
  questionCardCategorys: Array<QuestionCardCategoryInputType>;
  questionCards: Array<QuestionCardInputType>;
  questionFeedback: Array<MockExamQuestionFeedbackInputType>;
  quizComment: Array<QuizCommentInputType>;
  quizCommentLike: Array<QuizCommentLikeInputType>;
  randomExamLimit?: InputMaybe<Scalars['Float']['input']>;
  recentlyStudiedCategory?: Scalars['String']['input'];
  recentlyStudiedExams?: InputMaybe<Array<RecentlyStudiedExamsInputType>>;
  role: UserRole;
  seller?: InputMaybe<SellerInputType>;
  solveLimit?: InputMaybe<Scalars['Float']['input']>;
  solvedProblemCount?: InputMaybe<Scalars['Float']['input']>;
  todos: Array<TodoInputType>;
  usedFreeTrial: Scalars['Boolean']['input'];
  userRoles: Array<UserRoleInputType>;
  visit: Array<VisitInputType>;
};

export type UserProfileInput = {
  id: Scalars['Float']['input'];
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  ClientBasic = 'CLIENT_BASIC',
  ClientSafePremium = 'CLIENT_SAFE_PREMIUM',
  Partner = 'PARTNER',
  PaymentTest = 'PAYMENT_TEST',
  Seller = 'SELLER'
}

export type UserRoleInputType = {
  price?: Scalars['Float']['input'];
  role: RoleInputType;
  user?: InputMaybe<UserInputType>;
};

export type ViewPostInput = {
  postId: Scalars['Float']['input'];
};

export type ViewPostOutput = {
  __typename?: 'ViewPostOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Visit = {
  __typename?: 'Visit';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
};

export type VisitInputType = {
  user: UserInputType;
};

export type ZepComment = {
  __typename?: 'ZepComment';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  zepPost: ZepPost;
  zepUser: ZepUser;
};

export type ZepMapUserCount = {
  __typename?: 'ZepMapUserCount';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  mapId: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  userCount: Scalars['Float']['output'];
};

export type ZepPost = {
  __typename?: 'ZepPost';
  category: ZepPostCategory;
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  zepComment: Array<ZepComment>;
  zepUser: ZepUser;
};

export enum ZepPostCategory {
  Algorism = 'ALGORISM',
  Feedback = 'FEEDBACK',
  Free = 'FREE',
  Notice = 'NOTICE',
  Project = 'PROJECT',
  Study = 'STUDY'
}

export type ZepStudyTime = {
  __typename?: 'ZepStudyTime';
  created_at: Scalars['DateTime']['output'];
  grass_count: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  study_time: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  zepUser: ZepUser;
};

export type ZepUser = {
  __typename?: 'ZepUser';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  nickname: Scalars['String']['output'];
  studyTimes: Array<ZepStudyTime>;
  updated_at: Scalars['DateTime']['output'];
  zepComment: Array<ZepComment>;
  zepPost: Array<ZepPost>;
  zep_id: Scalars['String']['output'];
};

export type SendMessageToTelegramInput = {
  channelId: Scalars['Float']['input'];
  message: Scalars['String']['input'];
};

export type SendMessageToTelegramOutput = {
  __typename?: 'sendMessageToTelegramOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetKeywordSearchCountQueryVariables = Exact<{
  input: GetKeywordSearchCountInput;
}>;


export type GetKeywordSearchCountQuery = { __typename?: 'Query', getKeywordSearchCount: { __typename?: 'GetKeywordSearchCountOutput', error?: string | null, ok: boolean, keywordList?: Array<{ __typename?: 'NaverKeywordSearchCount', monthlyMobileQcCnt: number, monthlyPcQcCnt: number, relKeyword: string }> | null } };

export type GetBlogCategoryListQueryVariables = Exact<{
  input: GetBlogCategoryListInput;
}>;


export type GetBlogCategoryListQuery = { __typename?: 'Query', getBlogCategoryList: { __typename?: 'GetBlogCategoryListOutput', error?: string | null, ok: boolean, postCnt?: number | null, categories?: Array<{ __typename?: 'BlogCategory', categoryName: string, postCnt: number }> | null } };

export type GetSearchAvailabilityQueryVariables = Exact<{
  input: GetSearchAvailabilityInput;
}>;


export type GetSearchAvailabilityQuery = { __typename?: 'Query', getSearchAvailability: { __typename?: 'GetSearchAvailabilityOutput', error?: string | null, ok: boolean, posts?: Array<{ __typename?: 'NaverPostInfo', isSearchAvailability: boolean, commentCnt: number, link: string, logNo: number, sympathyCnt: number, titleWithInspectMessage: string, thumbnailCount: number }> | null } };

export type GetSearchRankQueryVariables = Exact<{
  input: GetSearchRankInput;
}>;


export type GetSearchRankQuery = { __typename?: 'Query', getSearchRank: { __typename?: 'GetSearchRankOutput', daumBlogSearchRank?: number | null, naverBlogSearchRank?: number | null, ok: boolean, error?: string | null, postLink?: string | null } };

export type GetBlogInfoQueryVariables = Exact<{
  input: GetBlogInfoInput;
}>;


export type GetBlogInfoQuery = { __typename?: 'Query', getBlogInfo: { __typename?: 'GetBlogInfoOutput', ok: boolean, error?: string | null, blogInfo?: { __typename?: 'BlogInfo', blogName: string, subscriberCount: number, blogDirectoryName: string, totalVisitorCount: number, influencerUrl: string, blogVisitor?: Array<{ __typename?: 'BlogVisitor', visitor: string, date: string }> | null } | null } };


export const GetKeywordSearchCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetKeywordSearchCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetKeywordSearchCountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getKeywordSearchCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"keywordList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyMobileQcCnt"}},{"kind":"Field","name":{"kind":"Name","value":"monthlyPcQcCnt"}},{"kind":"Field","name":{"kind":"Name","value":"relKeyword"}}]}}]}}]}}]} as unknown as DocumentNode<GetKeywordSearchCountQuery, GetKeywordSearchCountQueryVariables>;
export const GetBlogCategoryListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogCategoryList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBlogCategoryListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBlogCategoryList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"postCnt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"postCnt"}}]}}]}}]} as unknown as DocumentNode<GetBlogCategoryListQuery, GetBlogCategoryListQueryVariables>;
export const GetSearchAvailabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchAvailability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSearchAvailabilityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSearchAvailability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSearchAvailability"}},{"kind":"Field","name":{"kind":"Name","value":"commentCnt"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"logNo"}},{"kind":"Field","name":{"kind":"Name","value":"sympathyCnt"}},{"kind":"Field","name":{"kind":"Name","value":"titleWithInspectMessage"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetSearchAvailabilityQuery, GetSearchAvailabilityQueryVariables>;
export const GetSearchRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchRank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSearchRankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSearchRank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daumBlogSearchRank"}},{"kind":"Field","name":{"kind":"Name","value":"naverBlogSearchRank"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"postLink"}}]}}]}}]} as unknown as DocumentNode<GetSearchRankQuery, GetSearchRankQueryVariables>;
export const GetBlogInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBlogInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBlogInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"blogInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogName"}},{"kind":"Field","name":{"kind":"Name","value":"subscriberCount"}},{"kind":"Field","name":{"kind":"Name","value":"blogDirectoryName"}},{"kind":"Field","name":{"kind":"Name","value":"totalVisitorCount"}},{"kind":"Field","name":{"kind":"Name","value":"blogVisitor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"visitor"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"influencerUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlogInfoQuery, GetBlogInfoQueryVariables>;