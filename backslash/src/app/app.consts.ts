export const getNodesCsvString =
  'id,label,type\n 1,Amazon API Gataway,input\n 2,AWS Lambda Get Products,\n 3,AWS Lambda Get Product,\n 4,AWS Lambda Put Product,\n 5,AWS Lambda Delete Product, \n 6,Amazon DynamoDB Products Table,output';

export const getEdgesCsvString =
  'flow 1\n,1,2\n,2,6\n flow 2\n,1,3\n,3,6\n flow 3\n,1,4\n,4,6\n flow 4\n,1,5\n,5,6';

export const getMethodLabelMap = (): Map<string, string> =>
  new Map<string, string>([
    ['flow 1', 'GET /'],
    ['flow 2', 'GET PRODUCT /'],
    ['flow 3', 'PUT PRODUCT /'],
    ['flow 4', 'DELETE PRODUCT /'],
    ['joined', 'All Flows'],
  ]);
