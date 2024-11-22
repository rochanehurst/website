import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectList from "../../../components/main/projects/project-list";

const exampleProjects = [
  {
    title: "Test Project 1",
    description: "Test Description 1",
    websiteUrl: "",
    githubUrl: "",
    imageSrc: "/images/projects/routify.gif",
    tags: ["JavaScript", "NextJS", "ReactJS"],
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "Test Project 2",
    description: "Test Description 2",
    websiteUrl: "",
    githubUrl: "",
    imageSrc: "/images/projects/routify.gif",
    tags: ["JavaScript", "NextJS", "ReactJS"],
    date: "Jan 2024 - Mar 2024",
  },
];

describe('ProjectList', () => {
  it('renders without crashing', () => {
    render(<ProjectList projects={exampleProjects} />);

    for (const project of exampleProjects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();

      // Check for multiple matching date elements
      const dateElements = screen.getAllByText(project.date);
      expect(dateElements.length).toBeGreaterThan(0);
    }
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ProjectList projects={exampleProjects} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
