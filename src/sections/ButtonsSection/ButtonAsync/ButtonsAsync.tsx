import Button from "../../../components/Buttons/Button/Button";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

interface IButtonsAsync {
  customClass?: string;
}

function ButtonsAsync({ customClass }: IButtonsAsync) {
  return (
    <>
      <SectionContainerRow title="normal">
        <Button type="button" asyncButton={true} projectType="primary">
          Primary
        </Button>
        <Button type="button" asyncButton={true} projectType="secondary">
          Secondary
        </Button>
        <Button type="button" asyncButton={true} projectType="success">
          Success
        </Button>
        <Button type="button" asyncButton={true} projectType="warning">
          Warning
        </Button>
        <Button type="button" asyncButton={true} projectType="error">
          Error
        </Button>
        <Button type="button" asyncButton={true} projectType="info">
          Info
        </Button>
        <Button type="button" asyncButton={true} projectType="light">
          Light
        </Button>
        <Button type="button" asyncButton={true} projectType="dark">
          Dark
        </Button>
      </SectionContainerRow>
      <SectionContainerRow title="active">
        <Button
          type="button"
          asyncButton={true}
          projectType="primary"
          active={true}
        >
          Primary
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="secondary"
          active={true}
        >
          Secondary
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="success"
          active={true}
        >
          Success
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="warning"
          active={true}
        >
          Warning
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="error"
          active={true}
        >
          Error
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="info"
          active={true}
        >
          Info
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="light"
          active={true}
        >
          Light
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="dark"
          active={true}
        >
          Dark
        </Button>
      </SectionContainerRow>

      <SectionContainerRow title="disabled">
        <Button
          type="button"
          asyncButton={true}
          projectType="primary"
          disabled={true}
        >
          Primary
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="secondary"
          disabled={true}
        >
          Secondary
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="success"
          disabled={true}
        >
          Success
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="warning"
          disabled={true}
        >
          Warning
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="error"
          disabled={true}
        >
          Error
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="info"
          disabled={true}
        >
          Info
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="light"
          disabled={true}
        >
          Light
        </Button>
        <Button
          type="button"
          asyncButton={true}
          projectType="dark"
          disabled={true}
        >
          Dark
        </Button>
      </SectionContainerRow>
      <SectionContainerRow title="outline">
        <Button type="button" asyncButton={true} projectType="primaryOutline">
          Primary
        </Button>
        <Button type="button" asyncButton={true} projectType="secondaryOutline">
          Secondary
        </Button>
        <Button type="button" asyncButton={true} projectType="successOutline">
          Success
        </Button>
        <Button type="button" asyncButton={true} projectType="warningOutline">
          Warning
        </Button>
        <Button type="button" asyncButton={true} projectType="errorOutline">
          Error
        </Button>
        <Button type="button" asyncButton={true} projectType="infoOutline">
          Info
        </Button>
        <Button type="button" asyncButton={true} projectType="lightOutline">
          Light
        </Button>
        <Button type="button" asyncButton={true} projectType="darkOutline">
          Dark
        </Button>
      </SectionContainerRow>
    </>
  );
}

export default ButtonsAsync;
