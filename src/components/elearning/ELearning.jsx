import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4f8;
  padding: 2rem;
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SubHeader = styled(motion.h2)`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CourseCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
  width: 250px;
  text-align: center;
  cursor: pointer; /* Make it clear the card is clickable */
`;

const CourseImage = styled(motion.img)`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const courses = [
  {
    title: "Physics",
    description: "Learn the basics of React and build dynamic web apps.",
    image: "https://th.bing.com/th/id/R.a3fe5a921c5682e1e1fa544abbc0bb7e?rik=%2bbuydoNLH8YzTA&riu=http%3a%2f%2fvishvasbook.com%2fwp-content%2fuploads%2f2016%2f03%2fPhysics.jpg&ehk=mmUhQ2SLFDHwVsGP4CR9ROJFIMdokB46tA7b80wa9UM%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    title: "Chemistry",
    description: "Master JavaScript and enhance your web development skills.",
    image: "https://th.bing.com/th/id/OIP.5KQ2fpwcVD11SXfnUvi7hgHaKm?pid=ImgDet&w=191&h=273&c=7"
  },
  {
    title: "Biology",
    description: "Understand the principles of UI/UX design and improve user experience.",
    image: "https://th.bing.com/th/id/OIP.H_9RIaHwnn17rd0Nem5rswHaEK?rs=1&pid=ImgDetMain"
  },
];

const ELearning = () => {
  const navigate = useNavigate(); // Updated hook

  const navigateToLibrary = () => {
    navigate('/'); // Updated navigation method
  };

  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to E-Learning
      </Header>
      <SubHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover our courses and start learning today!
      </SubHeader>
      <CoursesContainer>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={navigateToLibrary} // Navigate to library page on click
          >
            <CourseImage 
              src={course.image} 
              alt={course.title} 
              whileHover={{ scale: 1.1 }} // Slight zoom on hover for images
            />
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
          </CourseCard>
        ))}
      </CoursesContainer>
    </PageContainer>
  );
};

export default ELearning;
