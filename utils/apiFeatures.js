class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const { page: _page, size: _size, ...otherQuery } = this.queryString;
    this.query.find(otherQuery);
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const size = this.queryString.size * 1 || 100;
    const skip = (page - 1) * size;

    this.query = this.query.skip(skip).limit(size);

    return this;
  }
}

module.exports = APIFeatures;
