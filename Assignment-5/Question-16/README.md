# Question 16: Course Registration System with Context API (ReactJS)

## Problem Statement
Develop a ReactJS application for a Course Registration System using **Context API** and **Hooks**:
- Allow users to select courses.
- Display the selected courses in a separate component **without passing data through intermediate components**.

## Components
- `CourseContext.jsx`: Implements `createContext` and `CourseProvider` with state and custom hook `useCourseRegistration`.
- `AvailableCourses.jsx`: Displays courses and directly calls `selectCourse(id)` from context.
- `SelectedCourses.jsx`: Directly reads `selectedCourses` and credits from context with drop option.
- `IntermediateLayout.jsx`: Intermediate layout receiving NO props, demonstrating prop-drilling avoidance.
- `CourseRegistration.jsx`: Wrapper providing `CourseProvider`.

## How to Run

```bash
# Starts the React development server:
npm run dev
# Then click on Question 16 in the sidebar!
```
