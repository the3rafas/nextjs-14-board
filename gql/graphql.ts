/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
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
  DateTime: { input: Date; output: string; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown; }
};

export type AddToNewFeaturesWaitingList = {
  __typename?: 'AddToNewFeaturesWaitingList';
  email: Scalars['String']['output'];
  /** New features kind */
  type: NewFeaturesKind;
};

export type AssignSecurityGroupToUsersInput = {
  securityGroupId: Scalars['String']['input'];
  usersIds: Array<Scalars['String']['input']>;
};

export type AttendanceFilterInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  searchKey?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  today?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<AttendanceTypeEnum>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AttendanceType = {
  __typename?: 'AttendanceType';
  /** User created date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Attendance type */
  type: AttendanceTypeEnum;
  /** User who attended */
  user: UserType;
};

export enum AttendanceTypeEnum {
  Checkin = 'CHECKIN',
  Checkout = 'CHECKOUT'
}

export type CheckInput = {
  checkType: AttendanceTypeEnum;
  workSpaceId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateHrRequestInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  type: HrRequestsTypeEnum;
};

export type CreateSecurityGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  groupName: Scalars['String']['input'];
  permissions: Array<Scalars['String']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  securityGroupId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  success: Scalars['Boolean']['output'];
};

export type DepartmentBoardFilter = {
  searchKey?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentPaginationType = {
  __typename?: 'DepartmentPaginationType';
  items: Array<DepartmentType>;
  total: Scalars['Int']['output'];
};

export type DepartmentType = {
  __typename?: 'DepartmentType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  memberCount?: Maybe<Scalars['Int']['output']>;
  securityGroup?: Maybe<SecurityGroupType>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export enum DeviceTypeEnum {
  Android = 'ANDROID',
  Ios = 'IOS',
  Mac = 'MAC',
  Other = 'OTHER',
  Windows = 'WINDOWS'
}

export type DocHistoryType = {
  __typename?: 'DocHistoryType';
  id: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  workspaceId: Scalars['String']['output'];
};

export type GroupedStructuredPermissions = {
  __typename?: 'GroupedStructuredPermissions';
  groupName: Scalars['String']['output'];
  permissions: Array<StructuredPermissions>;
};

export type HrRequestType = {
  __typename?: 'HrRequestType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: RequestStatusEnum;
  type: HrRequestsTypeEnum;
  updatedAt: Scalars['DateTime']['output'];
};

export type HrRequestsFilter = {
  sort?: InputMaybe<SortEnum>;
  status?: InputMaybe<RequestStatusEnum>;
  type?: InputMaybe<HrRequestsTypeEnum>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export enum HrRequestsTypeEnum {
  Holiday = 'HOLIDAY',
  Leave = 'LEAVE',
  Overtime = 'OVERTIME'
}

export type InvitationType = {
  __typename?: 'InvitationType';
  /** Invitee information */
  invitee: UserType;
  /** User information */
  user: UserType;
  /** Workspace information */
  workspace: InvitationWorkspaceType;
};

export type InvitationWorkspaceType = {
  __typename?: 'InvitationWorkspaceType';
  /** Base64 encoded avatar */
  avatar: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Workspace name */
  name: Scalars['String']['output'];
};

export type InviteUserType = {
  __typename?: 'InviteUserType';
  /** User accepted */
  accepted: Scalars['Boolean']['output'];
  allowedDevices?: Maybe<Array<DeviceTypeEnum>>;
  /** User avatar url */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** User created date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User email */
  email?: Maybe<Scalars['String']['output']>;
  /** User email verified */
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  /** User password has been set */
  hasPassword?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Invite id */
  inviteId: Scalars['String']['output'];
  /** User name */
  name?: Maybe<Scalars['String']['output']>;
  /** User permission in workspace */
  permission: Permission;
};

export enum InvoiceStatus {
  Draft = 'Draft',
  Open = 'Open',
  Paid = 'Paid',
  Uncollectible = 'Uncollectible',
  Void = 'Void'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptInviteById: Scalars['Boolean']['output'];
  addToNewFeaturesWaitingList: AddToNewFeaturesWaitingList;
  assignSecurityGroupToUsers: SecurityGroupType;
  assignUserToDepartment: UserType;
  cancelSubscription: UserSubscription;
  changeEmail: UserType;
  changePassword: UserType;
  /** Create a subscription checkout link of stripe */
  checkout: Scalars['String']['output'];
  /** Create a stripe customer portal to manage payment methods */
  createCustomerPortal: Scalars['String']['output'];
  createDepartment: DepartmentType;
  createHrRequest: HrRequestType;
  createSecurityGroup: SecurityGroupType;
  createUser: UserType;
  /** Create a new workspace */
  createWorkspace: WorkspaceType;
  /** user register a daily Attendance */
  dailyAttendance: AttendanceType;
  deleteAccount: DeleteAccount;
  deleteBlob: Scalars['Boolean']['output'];
  deleteDepartment: Scalars['Boolean']['output'];
  deleteSecurityGroup: Scalars['Boolean']['output'];
  deleteWorkspace: Scalars['Boolean']['output'];
  invite: Scalars['String']['output'];
  leaveWorkspace: Scalars['Boolean']['output'];
  publishPage: WorkspacePage;
  recoverDoc: Scalars['DateTime']['output'];
  /** Remove user avatar */
  removeAvatar: RemoveAvatar;
  removeFromDepartment: UserType;
  replyHrRequest: HrRequestType;
  resumeSubscription: UserSubscription;
  revoke: Scalars['Boolean']['output'];
  /** @deprecated use revokePublicPage */
  revokePage: Scalars['Boolean']['output'];
  revokePublicPage: WorkspacePage;
  seedAdmin: Scalars['Boolean']['output'];
  sendChangeEmail: Scalars['Boolean']['output'];
  sendChangePasswordEmail: Scalars['Boolean']['output'];
  sendSetPasswordEmail: Scalars['Boolean']['output'];
  sendVerifyChangeEmail: Scalars['Boolean']['output'];
  setBlob: Scalars['String']['output'];
  /** @deprecated renamed to publicPage */
  sharePage: Scalars['Boolean']['output'];
  signIn: UserType;
  signUp: UserType;
  unAssignSecurityGroup: Scalars['Boolean']['output'];
  updateDepartment: DepartmentType;
  updateSecurityGroup: SecurityGroupType;
  updateSubscriptionRecurring: UserSubscription;
  /** Update workspace */
  updateWorkspace: WorkspaceType;
  /** Upload user avatar */
  uploadAvatar: UserType;
};


export type MutationAcceptInviteByIdArgs = {
  inviteId: Scalars['String']['input'];
  sendAcceptMail?: InputMaybe<Scalars['Boolean']['input']>;
  workspaceId: Scalars['String']['input'];
};


export type MutationAddToNewFeaturesWaitingListArgs = {
  email: Scalars['String']['input'];
  type: NewFeaturesKind;
};


export type MutationAssignSecurityGroupToUsersArgs = {
  input: AssignSecurityGroupToUsersInput;
};


export type MutationAssignUserToDepartmentArgs = {
  departmentId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCancelSubscriptionArgs = {
  idempotencyKey: Scalars['String']['input'];
};


export type MutationChangeEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCheckoutArgs = {
  idempotencyKey: Scalars['String']['input'];
  recurring: SubscriptionRecurring;
};


export type MutationCreateDepartmentArgs = {
  input: CreateDepartmentInput;
};


export type MutationCreateHrRequestArgs = {
  input: CreateHrRequestInput;
};


export type MutationCreateSecurityGroupArgs = {
  input: CreateSecurityGroupInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWorkspaceArgs = {
  init: Scalars['Upload']['input'];
};


export type MutationDailyAttendanceArgs = {
  check: CheckInput;
};


export type MutationDeleteBlobArgs = {
  hash: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationDeleteDepartmentArgs = {
  departmentId: Scalars['String']['input'];
};


export type MutationDeleteSecurityGroupArgs = {
  securityGroupId: Scalars['String']['input'];
};


export type MutationDeleteWorkspaceArgs = {
  id: Scalars['String']['input'];
};


export type MutationInviteArgs = {
  email: Scalars['String']['input'];
  permission: Permission;
  sendInviteMail?: InputMaybe<Scalars['Boolean']['input']>;
  workspaceId: Scalars['String']['input'];
};


export type MutationLeaveWorkspaceArgs = {
  sendLeaveMail?: InputMaybe<Scalars['Boolean']['input']>;
  workspaceId: Scalars['String']['input'];
  workspaceName: Scalars['String']['input'];
};


export type MutationPublishPageArgs = {
  mode?: InputMaybe<PublicPageMode>;
  pageId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationRecoverDocArgs = {
  guid: Scalars['String']['input'];
  timestamp: Scalars['DateTime']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationRemoveFromDepartmentArgs = {
  departmentId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationReplyHrRequestArgs = {
  id: Scalars['Int']['input'];
  status: RequestStatusEnum;
};


export type MutationResumeSubscriptionArgs = {
  idempotencyKey: Scalars['String']['input'];
};


export type MutationRevokeArgs = {
  userId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationRevokePageArgs = {
  pageId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationRevokePublicPageArgs = {
  pageId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationSendChangeEmailArgs = {
  callbackUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationSendChangePasswordEmailArgs = {
  callbackUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationSendSetPasswordEmailArgs = {
  callbackUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationSendVerifyChangeEmailArgs = {
  callbackUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSetBlobArgs = {
  blob: Scalars['Upload']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationSharePageArgs = {
  pageId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUnAssignSecurityGroupArgs = {
  input: UnAssignSecurityGroupToUsersInput;
};


export type MutationUpdateDepartmentArgs = {
  input: UpdateDepartmentInput;
};


export type MutationUpdateSecurityGroupArgs = {
  input: UpdateSecurityGroupInput;
};


export type MutationUpdateSubscriptionRecurringArgs = {
  idempotencyKey: Scalars['String']['input'];
  recurring: SubscriptionRecurring;
};


export type MutationUpdateWorkspaceArgs = {
  input: UpdateWorkspaceInput;
};


export type MutationUploadAvatarArgs = {
  avatar: Scalars['Upload']['input'];
};

export enum NewFeaturesKind {
  EarlyAccess = 'EarlyAccess'
}

export type PageDetails = {
  __typename?: 'PageDetails';
  currentPage: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type PagenationFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatedResponseClass = {
  __typename?: 'PaginatedResponseClass';
  data: Array<HrRequestType>;
  pageDetails: PageDetails;
};

export type PaginationAttendanceType = {
  __typename?: 'PaginationAttendanceType';
  items: Array<AttendanceType>;
  /** total Attendance  */
  total: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationUserType = {
  __typename?: 'PaginationUserType';
  items: Array<UserType>;
  /** total Attendance  */
  total: Scalars['Int']['output'];
};

/** User permission in workspace */
export enum Permission {
  Admin = 'Admin',
  Owner = 'Owner',
  Read = 'Read',
  Write = 'Write'
}

/** The mode which the public page default in */
export enum PublicPageMode {
  Edgeless = 'Edgeless',
  Page = 'Page'
}

export type Query = {
  __typename?: 'Query';
  /** user attendance board */
  attendanceBoard?: Maybe<PaginationAttendanceType>;
  checkBlobSize: WorkspaceBlobSizes;
  collectAllBlobSizes: WorkspaceBlobSizes;
  collectBlobSizes: WorkspaceBlobSizes;
  /** Get current user */
  currentUser?: Maybe<UserType>;
  department: DepartmentType;
  departmentsBoard: DepartmentPaginationType;
  getAllPermissions: Array<Scalars['String']['output']>;
  getGroupedPermissions: Array<GroupedStructuredPermissions>;
  /** Update workspace */
  getInviteInfo: InvitationType;
  hrRequest: HrRequestType;
  hrRequests: PaginatedResponseClass;
  /** Get is owner of workspace */
  isOwner: Scalars['Boolean']['output'];
  /** List blobs of workspace */
  listBlobs: Array<Scalars['String']['output']>;
  prices: Array<SubscriptionPrice>;
  /** Get public workspace by id */
  publicWorkspace: WorkspaceType;
  securityGroup: SecurityGroupType;
  securityGroups: Array<SecurityGroupType>;
  securityGroupsBoard: Array<SecurityGroupType>;
  /** Get user by email */
  user?: Maybe<UserType>;
  /** user attendance  */
  userAttendance?: Maybe<PaginationAttendanceType>;
  /** user who didn't attend yet  */
  userAttendanceReport?: Maybe<PaginationUserType>;
  usersBoard: PaginationUserType;
  /** Get workspace by id */
  workspace: WorkspaceType;
  /** Get all accessible workspaces for current user */
  workspaces: Array<WorkspaceType>;
};


export type QueryAttendanceBoardArgs = {
  input: AttendanceFilterInput;
  pagination?: InputMaybe<PagenationFilterInput>;
};


export type QueryCheckBlobSizeArgs = {
  size: Scalars['Float']['input'];
  workspaceId: Scalars['String']['input'];
};


export type QueryCollectBlobSizesArgs = {
  workspaceId: Scalars['String']['input'];
};


export type QueryDepartmentArgs = {
  slug: Scalars['String']['input'];
};


export type QueryDepartmentsBoardArgs = {
  filter: DepartmentBoardFilter;
  paginate?: InputMaybe<PaginationInput>;
};


export type QueryGetInviteInfoArgs = {
  inviteId: Scalars['String']['input'];
};


export type QueryHrRequestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHrRequestsArgs = {
  filter?: InputMaybe<HrRequestsFilter>;
  pagination?: InputMaybe<PagenationFilterInput>;
};


export type QueryIsOwnerArgs = {
  workspaceId: Scalars['String']['input'];
};


export type QueryListBlobsArgs = {
  workspaceId: Scalars['String']['input'];
};


export type QueryPublicWorkspaceArgs = {
  id: Scalars['String']['input'];
};


export type QuerySecurityGroupArgs = {
  securityGroupId: Scalars['String']['input'];
};


export type QuerySecurityGroupsBoardArgs = {
  filter?: InputMaybe<SecurityGroupsFilter>;
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserAttendanceArgs = {
  options?: InputMaybe<UserAttendanceFilter>;
};


export type QueryUserAttendanceReportArgs = {
  options: UserReportFilterInput;
};


export type QueryUsersBoardArgs = {
  filter?: InputMaybe<UsersBoardFilter>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryWorkspaceArgs = {
  id: Scalars['String']['input'];
};

export type RemoveAvatar = {
  __typename?: 'RemoveAvatar';
  success: Scalars['Boolean']['output'];
};

export enum RequestStatusEnum {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type SecurityGroupType = {
  __typename?: 'SecurityGroupType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  groupName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  users: Array<UserType>;
};

export type SecurityGroupsFilter = {
  searchKey?: InputMaybe<Scalars['String']['input']>;
};

export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StructuredPermissions = {
  __typename?: 'StructuredPermissions';
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum SubscriptionPlan {
  Enterprise = 'Enterprise',
  Free = 'Free',
  Pro = 'Pro',
  Team = 'Team'
}

export type SubscriptionPrice = {
  __typename?: 'SubscriptionPrice';
  amount: Scalars['Int']['output'];
  currency: Scalars['String']['output'];
  plan: SubscriptionPlan;
  type: Scalars['String']['output'];
  yearlyAmount: Scalars['Int']['output'];
};

export enum SubscriptionRecurring {
  Monthly = 'Monthly',
  Yearly = 'Yearly'
}

export enum SubscriptionStatus {
  Active = 'Active',
  Canceled = 'Canceled',
  Incomplete = 'Incomplete',
  IncompleteExpired = 'IncompleteExpired',
  PastDue = 'PastDue',
  Paused = 'Paused',
  Trialing = 'Trialing',
  Unpaid = 'Unpaid'
}

export type TokenType = {
  __typename?: 'TokenType';
  refresh: Scalars['String']['output'];
  sessionToken?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
};

export type UnAssignSecurityGroupToUsersInput = {
  usersIds: Array<Scalars['String']['input']>;
};

export type UpdateDepartmentInput = {
  departmentId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  securityGroupId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSecurityGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  securityGroupId: Scalars['String']['input'];
};

export type UpdateWorkspaceInput = {
  id: Scalars['ID']['input'];
  /** is Public workspace */
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAttendanceFilter = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  searchKey?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  today?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<AttendanceTypeEnum>;
};

export type UserInvoice = {
  __typename?: 'UserInvoice';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastPaymentError?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  plan: SubscriptionPlan;
  reason: Scalars['String']['output'];
  recurring: SubscriptionRecurring;
  status: InvoiceStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserReportFilterInput = {
  later?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  end: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  nextBillAt?: Maybe<Scalars['DateTime']['output']>;
  plan: SubscriptionPlan;
  recurring: SubscriptionRecurring;
  start: Scalars['DateTime']['output'];
  status: SubscriptionStatus;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
  trialStart?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  allowedDevices: Array<DeviceTypeEnum>;
  /** User avatar url */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** User created date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<DepartmentType>;
  /** User email */
  email: Scalars['String']['output'];
  /** User email verified */
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  /** User password has been set */
  hasPassword?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Get user invoice count */
  invoiceCount: Scalars['Int']['output'];
  invoices: Array<UserInvoice>;
  lastAttendance: Scalars['String']['output'];
  /** User name */
  name: Scalars['String']['output'];
  subscription?: Maybe<UserSubscription>;
  token: TokenType;
};


export type UserTypeInvoicesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UsersBoardFilter = {
  departmentId?: InputMaybe<Scalars['String']['input']>;
  searchKey?: InputMaybe<Scalars['String']['input']>;
  securityGroupId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceBlobSizes = {
  __typename?: 'WorkspaceBlobSizes';
  size: Scalars['Float']['output'];
};

export type WorkspacePage = {
  __typename?: 'WorkspacePage';
  id: Scalars['String']['output'];
  mode: PublicPageMode;
  public: Scalars['Boolean']['output'];
  workspaceId: Scalars['String']['output'];
};

export type WorkspaceType = {
  __typename?: 'WorkspaceType';
  /** Workspace created date */
  createdAt: Scalars['DateTime']['output'];
  histories: Array<DocHistoryType>;
  id: Scalars['ID']['output'];
  /** member count of workspace */
  memberCount: Scalars['Int']['output'];
  /** Members of workspace */
  members: Array<InviteUserType>;
  /** Owner of workspace */
  owner: UserType;
  /** Permission of current signed in user in workspace */
  permission: Permission;
  /** is Public workspace */
  public: Scalars['Boolean']['output'];
  /** Public pages of a workspace */
  publicPages: Array<WorkspacePage>;
  /**
   * Shared pages of workspace
   * @deprecated use WorkspaceType.publicPages
   */
  sharedPages: Array<Scalars['String']['output']>;
};


export type WorkspaceTypeHistoriesArgs = {
  before?: InputMaybe<Scalars['DateTime']['input']>;
  guid: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type WorkspaceTypeMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateDepartmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  securityGroupId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type AttendanceBoardQueryVariables = Exact<{
  input: AttendanceFilterInput;
  pagination: PagenationFilterInput;
}>;


export type AttendanceBoardQuery = { __typename?: 'Query', attendanceBoard?: { __typename?: 'PaginationAttendanceType', total: number, items: Array<{ __typename?: 'AttendanceType', id: string, type: AttendanceTypeEnum, createdAt?: string | null, user: { __typename?: 'UserType', name: string } }> } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'UserType', id: string, name: string, email: string, avatarUrl?: string | null, emailVerified?: string | null, token: { __typename?: 'TokenType', token: string } } | null };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', id: string, name: string, avatarUrl?: string | null, email: string, hasPassword?: boolean | null, lastAttendance: string } | null };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'UserType', id: string, name: string, email: string, avatarUrl?: string | null, emailVerified?: string | null, token: { __typename?: 'TokenType', token: string } } };

export type UserAttendanceReportQueryVariables = Exact<{
  options: UserReportFilterInput;
}>;


export type UserAttendanceReportQuery = { __typename?: 'Query', userAttendanceReport?: { __typename?: 'PaginationUserType', total: number, items: Array<{ __typename?: 'UserType', id: string, name: string, email: string, lastAttendance: string }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const AttendanceBoardDocument = new TypedDocumentString(`
    query attendanceBoard($input: AttendanceFilterInput!, $pagination: PagenationFilterInput!) {
  attendanceBoard(input: $input, pagination: $pagination) {
    items {
      id
      type
      user {
        name
      }
      createdAt
    }
    total
  }
}
    `) as unknown as TypedDocumentString<AttendanceBoardQuery, AttendanceBoardQueryVariables>;
export const CurrentUserDocument = new TypedDocumentString(`
    query currentUser {
  currentUser {
    id
    name
    email
    avatarUrl
    emailVerified
    token {
      token
    }
  }
}
    `) as unknown as TypedDocumentString<CurrentUserQuery, CurrentUserQueryVariables>;
export const GetUserDocument = new TypedDocumentString(`
    query getUser($email: String!) {
  user(email: $email) {
    id
    name
    avatarUrl
    email
    hasPassword
    lastAttendance
  }
}
    `) as unknown as TypedDocumentString<GetUserQuery, GetUserQueryVariables>;
export const SignInDocument = new TypedDocumentString(`
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    id
    name
    email
    avatarUrl
    emailVerified
    token {
      token
    }
  }
}
    `) as unknown as TypedDocumentString<SignInMutation, SignInMutationVariables>;
export const UserAttendanceReportDocument = new TypedDocumentString(`
    query userAttendanceReport($options: UserReportFilterInput!) {
  userAttendanceReport(options: $options) {
    items {
      id
      name
      email
      lastAttendance
    }
    total
  }
}
    `) as unknown as TypedDocumentString<UserAttendanceReportQuery, UserAttendanceReportQueryVariables>;