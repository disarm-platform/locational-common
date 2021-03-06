const data = [
  {
    'id': 'd1',
    'rows': [
      {
        'id': 1,
        'name': 'John',
        'age': 20,
        'createdAt': '20171031',
        'score': 0.03343,
        '$geom': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Point',
            'coordinates': [
              30.563964843750004,
              -26.017297563851745
            ]
          }
        }
      },
      {
        'id': 2,
        'name': 'Jane',
        'age': 24,
        'createdAt': '20171112',
        'score': 0.23343,
        '$geom': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Point',
            'coordinates': [
              25.7958984375,
              -26.64745870265937
            ]
          }
        }
      }
    ]
  }
]

export const common = {
  async load_from_local (id) {
    return data.find(d => d.id === id)
  }
}
