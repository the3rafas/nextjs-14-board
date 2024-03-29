import {
  AttendanceBoardDocument,
  AttendanceFilterInput
} from '../../gql/graphql';
import { executeGraphQL } from '../../libs/graphql';

export async function getAttendanceData(
  filter: AttendanceFilterInput = {},
  page: number = 1,
  limit: number = 15
) {
  const { data, error } = await executeGraphQL(AttendanceBoardDocument, {
    variables: {
      input: filter,
      pagination: { limit: limit, page: page }
    }
  });
  console.log(data);

  return !error ? data?.attendanceBoard : { items: [] };
}
