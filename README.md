# monimail

Token:
Generate new token based on: {
    user-id,
    token-created-on: timestamp
    secret?
}

Create redis caching system
- Store every single piece of data into cache => Includes all forms of data

NOTE: Redis might only hold the data up to 10 mins => Need validate
- Update the non static data every 10 mins -> bg work => (company, user, mailing list item)
    However: If there is an instance request for update => We refresh the items on request => Update cache first then query to database
- Token => Should be expired after a period of time