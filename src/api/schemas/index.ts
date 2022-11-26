export interface resSchema {
  json(data: object): unknown;
  type: 'object',
  page: Number,
  results: Array<object>,
  total_results: Number,
  total_pages: Number
};

export interface reqShema {
  type: 'object',
  params: {
    page: Number,
  },
}

export interface resUpcomingSchema {
  json(data: object): unknown;
  type: 'object',
  page: Number,
  dates: object;
  results: Array<object>,
  total_results: Number,
  total_pages: Number
};
