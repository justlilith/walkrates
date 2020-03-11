# Walkrates
## (like the philosopher)

### Rationale

We've all wanted to know how long it would take to walk between two places.

We've all wanted to _also_ know if we could make that walk on a steady diet of tofu. Or Oreos. Or avocados.

Walkrates allows a user to find the answer to that question.

### Process

A user picks a start and a destination. They then pick a food item. After calculation, they receive the length of the journey and a consumption goal. For example, it'll take 1200 cucumbers to walk from Tucson, AZ to Phoenix, AZ.

But that number seems low, doesn't it? Would you really need 1200 cucumbers? Maybe! Let's find out!

**Components**

- Location picker, for start and destination
- Food item picker
- Google Maps overview
- Results computed from returned data

### Frontend

- React.js
- React Router

### Backend

- Node.js
- Google Maps Client API
- Heroku

### APIs Used

- [Google Maps Client API](https://developers.google.com/maps/web-services/client-library)
- [Google Maps Distance Matrix](https://developers.google.com/maps/documentation/distance-matrix/start)
- [Nutritionix](https://developer.nutritionix.com/)  

### Dependencies

- Node.js
- Express
- cors