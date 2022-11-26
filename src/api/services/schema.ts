export interface resPopular {
  json(data: object): unknown;
  type: 'object',
  page: Number,
  results: Array<object>,
  total_results: Number,
  total_pages: Number
};

export interface reqPopular {
  type: 'object',
  params: {
    page: Number,
  },
}
