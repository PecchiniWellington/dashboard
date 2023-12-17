import Button from "../../../components/Buttons/Button/Button";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";

function ButtonsBase() {
  return (
    <>
      <SectionContainerRow title="normal">
        <Button type="button" projectType="primary">
          Primary
        </Button>
        <Button type="button" projectType="secondary">
          Secondary
        </Button>
        <Button type="button" projectType="success">
          Success
        </Button>
        <Button type="button" projectType="warning">
          Warning
        </Button>
        <Button type="button" projectType="error">
          Error
        </Button>
        <Button type="button" projectType="info">
          Info
        </Button>
        <Button type="button" projectType="light">
          Light
        </Button>
        <Button type="button" projectType="dark">
          Dark
        </Button>
      </SectionContainerRow>
      <SectionContainerRow title="active">
        <Button type="button" projectType="primary" active={true}>
          Primary
        </Button>
        <Button type="button" projectType="secondary" active={true}>
          Secondary
        </Button>
        <Button type="button" projectType="success" active={true}>
          Success
        </Button>
        <Button type="button" projectType="warning" active={true}>
          Warning
        </Button>
        <Button type="button" projectType="error" active={true}>
          Error
        </Button>
        <Button type="button" projectType="info" active={true}>
          Info
        </Button>
        <Button type="button" projectType="light" active={true}>
          Light
        </Button>
        <Button type="button" projectType="dark" active={true}>
          Dark
        </Button>
      </SectionContainerRow>

      <SectionContainerRow title="disabled">
        <Button type="button" projectType="primary" disabled={true}>
          Primary
        </Button>
        <Button type="button" projectType="secondary" disabled={true}>
          Secondary
        </Button>
        <Button type="button" projectType="success" disabled={true}>
          Success
        </Button>
        <Button type="button" projectType="warning" disabled={true}>
          Warning
        </Button>
        <Button type="button" projectType="error" disabled={true}>
          Error
        </Button>
        <Button type="button" projectType="info" disabled={true}>
          Info
        </Button>
        <Button type="button" projectType="light" disabled={true}>
          Light
        </Button>
        <Button type="button" projectType="dark" disabled={true}>
          Dark
        </Button>
      </SectionContainerRow>
      <SectionContainerRow title="outline">
        <Button type="button" projectType="primaryOutline">
          Primary
        </Button>
        <Button type="button" projectType="secondaryOutline">
          Secondary
        </Button>
        <Button type="button" projectType="successOutline">
          Success
        </Button>
        <Button type="button" projectType="warningOutline">
          Warning
        </Button>
        <Button type="button" projectType="errorOutline">
          Error
        </Button>
        <Button type="button" projectType="infoOutline">
          Info
        </Button>
        <Button type="button" projectType="lightOutline">
          Light
        </Button>
        <Button type="button" projectType="darkOutline">
          Dark
        </Button>
      </SectionContainerRow>
    </>
  );
}

export default ButtonsBase;
