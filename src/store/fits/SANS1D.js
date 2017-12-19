export default {
    'Linear': {
      fit: 'Linear',
      equation: 'm*x+b',
      transformations: {
        x: 'x',
        y: 'y',
        error: 'error',
      },
      yLabel: "I",
      xLabel: "Q",
      note: "",
      initialValues: [
          ['m', 1, false],
          ['b', 1, false],
      ],
    },
    'Guinier': {
      fit: 'Guinier',
      equation: "-Rg^2/3*x+I0",
      transformations: {
        x: 'x^2',
        y: 'log(y)',
        error: '((1/y)*error)^2',
      },
      yLabel: "Log(I(q))",
      xLabel: "q^2",
      note: "",
      initialValues: [
          ['Rg', 1, false],
          ['I0', 1, false],
      ],
    },
    // 'Low-Q Guinier': {
    //   fit: 'Low-Q Guinier',
    //   equation: "-(L^2/12+Rg^2/2)/3*x+I0",
    //   yTransformation: "log(y)",
    //   xTransformation: "x^2",
    //   eTransformation: "((1/y)*e)^2",
    //   yLabel: "Log(I(q))",
    //   xLabel: "q^2",
    //   note: "Cylinder of length L and Radius R"
    // },
    // 'Intermediate-Q Guinier': {
    //   fit: 'Intermediate-Q Guinier',
    //   equation: "-(Rg^2/2)/3*x+I0/x",
    //   yTransformation: "log(x*y)",
    //   xTransformation: "x^2",
    //   eTransformation: "((1/y)*e)^2",
    //   yLabel: "Log(q*I(q))",
    //   xLabel: "q^2",
    //   note: "Radius R"
    // },
    // 'Flat Object Guinier': {
    //   fit: 'Flat Object Guinier',
    //   equation: "-(T^2/12)/3*x+I0/x^2",
    //   yTransformation: "log(x^2*y)",
    //   xTransformation: "x^2",
    //   eTransformation: "((1/y)*e)^2",
    //   yLabel: "Log(q^2*I(q))",
    //   xLabel: "q^2",
    //   note: "T is the thickness of a flat (lamella) object."
    // },
    'Porod': {
      fit: 'Porod',
      equation: "p0*x^(-p1)",
      transformations: {
        x: 'x',
        y: 'y',
        error: 'error',
      },
      yLabel: "I(q)",
      xLabel: "q",
      note: "This is valid for high Q.",
      initialValues: [
          ['p0', 1, false],
          ['p1', 1, false],
      ],
    },
    'Zimm': {
      fit: 'Zimm',
      equation: "1/I0+Cl^2/I0*x",
      transformations: {
        x: 'x^2',
        y: '1/y',
        error: '((-1/y^2)*error)^2',
      },
      yLabel: "1/I(q)",
      xLabel: "q^2",
      note: "",
      initialValues: [
          ['I0', 1, false],
          ['Cl', 1, false],
      ],
    },
    'Kratky': {
      fit: 'Kratky',
      equation: "m*x+b",
      transformations: {
        x: 'x',
        y: 'x^2*log(y)',
        // because there's no error for X I'm doing e(x) = 0.1
        // e(x) = sqrt(x) is annoying for high x
        error: '(x^2/y * error)^2 + (2*x*log(y) * 0.1)^2',
      },
      yLabel: "q^2 \times log(I)",
      xLabel: "q",
      note: "",
      initialValues: [
          ['m', 1, false],
          ['b', 1, false],
      ],
    },
    'Debye Beuche': {
      fit: 'Debye Beuche',
      equation: "m*x+I0",
      transformations: {
        x: 'x^2',
        y: 'sqrt(y)',
        error: '(1/(2*sqrt(y))*error)^2',
      },
      yLabel: "sqrt(I)",
      xLabel: "Q^2",
      note: "",
      initialValues: [
          ['m', 1, false],
          ['I0', 1, false],
      ],
    },
  }